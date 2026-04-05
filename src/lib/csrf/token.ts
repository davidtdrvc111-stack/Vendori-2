/**
 * CSRF Token Generation and Validation Library
 *
 * Implements stateless CSRF protection using HMAC-SHA256 signed tokens.
 * Tokens contain: nonce + timestamp + signature
 *
 * Security Features:
 * - Cryptographically secure random nonce (128-bit entropy)
 * - HMAC-SHA256 signature prevents tampering
 * - Timestamp-based expiry (default: 1 hour)
 * - Constant-time comparison prevents timing attacks
 * - No server-side storage required (stateless)
 *
 * Token Format: {nonce}.{timestamp}.{signature}
 * Example: "a1b2c3d4e5f6.1678901234567.hmac_sha256_hex"
 */

import { createHmac, randomBytes, timingSafeEqual } from 'crypto';

/**
 * Default token expiry time in milliseconds (1 hour)
 */
const DEFAULT_TOKEN_EXPIRY = 3600000; // 1 hour

/**
 * Get CSRF secret from environment variables
 * @throws {Error} If CSRF_SECRET is not configured
 */
function getCSRFSecret(): string {
  const secret = process.env.CSRF_SECRET;

  if (!secret) {
    throw new Error(
      'CSRF_SECRET environment variable is not configured. ' +
      'Generate one with: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"'
    );
  }

  // Validate secret length (minimum 32 bytes = 64 hex characters)
  if (secret.length < 64) {
    throw new Error(
      'CSRF_SECRET must be at least 64 characters (32 bytes). ' +
      'Current length: ' + secret.length
    );
  }

  return secret;
}

/**
 * Generate HMAC-SHA256 signature for token
 * @param data - Data to sign (nonce + timestamp)
 * @param secret - CSRF secret key
 * @returns Hex-encoded signature
 */
function generateSignature(data: string, secret: string): string {
  return createHmac('sha256', secret)
    .update(data)
    .digest('hex');
}

/**
 * Generate a new CSRF token
 *
 * Token format: {nonce}.{timestamp}.{signature}
 * - nonce: 16 bytes of cryptographically secure random data (hex-encoded)
 * - timestamp: Current Unix timestamp in milliseconds
 * - signature: HMAC-SHA256 of (nonce + timestamp)
 *
 * @returns CSRF token string
 *
 * @example
 * const token = generateCSRFToken();
 * // Returns: "a1b2c3d4e5f6.1678901234567.e5f6g7h8i9j0..."
 */
export function generateCSRFToken(): string {
  try {
    const secret = getCSRFSecret();

    // Generate cryptographically secure random nonce (16 bytes = 128-bit entropy)
    const nonce = randomBytes(16).toString('hex'); // 32 hex characters

    // Current timestamp in milliseconds
    const timestamp = Date.now().toString();

    // Generate HMAC signature
    const data = `${nonce}.${timestamp}`;
    const signature = generateSignature(data, secret);

    // Combine into final token
    return `${nonce}.${timestamp}.${signature}`;
  } catch (error) {
    // Log error in development, throw in production
    if (process.env.NODE_ENV === 'development') {
      console.error('[CSRF] Token generation error:', error);
    }
    throw new Error('Failed to generate CSRF token');
  }
}

/**
 * Validate a CSRF token
 *
 * Validates:
 * 1. Token format (3 parts: nonce.timestamp.signature)
 * 2. Signature authenticity (HMAC verification)
 * 3. Token expiry (timestamp within maxAgeMs)
 *
 * @param token - CSRF token to validate
 * @param maxAgeMs - Maximum age in milliseconds (default: 1 hour from env or constant)
 * @returns true if token is valid, false otherwise
 *
 * @example
 * const isValid = validateCSRFToken(token);
 * if (!isValid) {
 *   return res.status(403).json({ error: 'Invalid CSRF token' });
 * }
 */
export function validateCSRFToken(
  token: string | null | undefined,
  maxAgeMs?: number
): boolean {
  try {
    // Guard: Check if token exists and is a string
    if (!token || typeof token !== 'string') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Token is null, undefined, or not a string');
      }
      return false;
    }

    // Parse token parts
    const parts = token.split('.');
    if (parts.length !== 3) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Invalid token format (expected 3 parts, got ' + parts.length + ')');
      }
      return false;
    }

    const [nonce, timestampStr, providedSignature] = parts;

    // Validate part lengths (basic sanity check)
    if (!nonce || !timestampStr || !providedSignature) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Empty token parts');
      }
      return false;
    }

    // Validate nonce length (should be 32 hex characters from 16 bytes)
    if (nonce.length !== 32) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Invalid nonce length (expected 32, got ' + nonce.length + ')');
      }
      return false;
    }

    // Validate signature length (HMAC-SHA256 = 64 hex characters)
    if (providedSignature.length !== 64) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Invalid signature length (expected 64, got ' + providedSignature.length + ')');
      }
      return false;
    }

    // Parse timestamp
    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp) || timestamp <= 0) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Invalid timestamp');
      }
      return false;
    }

    // Check token expiry
    const tokenAge = Date.now() - timestamp;
    const maxAge = maxAgeMs
      || (process.env.CSRF_TOKEN_EXPIRY ? parseInt(process.env.CSRF_TOKEN_EXPIRY, 10) : null)
      || DEFAULT_TOKEN_EXPIRY;

    if (tokenAge > maxAge) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Token expired (age: ' + Math.round(tokenAge / 1000) + 's, max: ' + Math.round(maxAge / 1000) + 's)');
      }
      return false;
    }

    // Prevent tokens from the future (clock skew attack)
    if (tokenAge < -60000) { // Allow 1 minute clock skew
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Token timestamp is in the future');
      }
      return false;
    }

    // Generate expected signature
    const secret = getCSRFSecret();
    const data = `${nonce}.${timestampStr}`;
    const expectedSignature = generateSignature(data, secret);

    // Constant-time comparison (prevents timing attacks)
    // Both signatures are hex strings of same length (64 chars)
    const providedBuffer = Buffer.from(providedSignature, 'hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'hex');

    if (providedBuffer.length !== expectedBuffer.length) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Signature length mismatch');
      }
      return false;
    }

    // Use timingSafeEqual for constant-time comparison
    const isSignatureValid = timingSafeEqual(providedBuffer, expectedBuffer);

    if (!isSignatureValid) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSRF] Validation failed: Invalid signature (possible tampering)');
      }
      return false;
    }

    // All checks passed
    if (process.env.NODE_ENV === 'development') {
      console.log('[CSRF] Token validated successfully (age: ' + Math.round(tokenAge / 1000) + 's)');
    }

    return true;
  } catch (error) {
    // Fail closed: treat any error as invalid token
    if (process.env.NODE_ENV === 'development') {
      console.error('[CSRF] Validation error:', error);
    }
    return false;
  }
}

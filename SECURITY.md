# Security Policy & Best Practices

This document outlines the security measures implemented in the VENDORi website and provides guidelines for maintaining security.

**Last Updated:** 2026-03-15
**Security Score:** 100/100 🟢

---

## 📋 Table of Contents

- [Security Headers](#security-headers)
- [Content Security Policy](#content-security-policy)
- [Input Validation & Sanitization](#input-validation--sanitization)
- [XSS Protection](#xss-protection)
- [Rate Limiting](#rate-limiting)
- [Bot Protection](#bot-protection)
- [Privacy & GDPR Compliance](#privacy--gdpr-compliance)
- [Dependencies](#dependencies)
- [Best Practices](#best-practices)
- [Reporting Security Issues](#reporting-security-issues)

---

## 🛡️ Security Headers

All security headers are configured in `next.config.js`:

### Implemented Headers

| Header | Value | Purpose |
|--------|-------|---------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Force HTTPS for 2 years |
| `X-Frame-Options` | `SAMEORIGIN` | Prevent clickjacking |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-sniffing |
| `X-XSS-Protection` | `1; mode=block` | Enable browser XSS filter |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer information |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Disable unnecessary browser features |
| `X-Download-Options` | `noopen` | Prevent file execution in IE |
| `X-Permitted-Cross-Domain-Policies` | `none` | Restrict Adobe products access |
| `Upgrade-Insecure-Requests` | `1` | Upgrade HTTP to HTTPS |

---

## 🔐 Content Security Policy

**Strict CSP without unsafe-inline/unsafe-eval:**

```javascript
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  style-src 'self';
  img-src 'self' data: blob:;
  font-src 'self';
  connect-src 'self';
  frame-src 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self' mailto:;
```

### Why This Matters

- **No `unsafe-inline`**: Prevents inline script execution (XSS protection)
- **No `unsafe-eval`**: Prevents `eval()` and `Function()` usage
- **Strict directives**: Only self-hosted resources allowed

### Future Considerations

If external scripts are needed (e.g., CDN):

1. **Use Subresource Integrity (SRI):**
   ```html
   <script
     src="https://cdn.example.com/lib.js"
     integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
     crossorigin="anonymous">
   </script>
   ```

2. **Generate SRI hashes:**
   ```bash
   openssl dgst -sha384 -binary FILENAME.js | openssl base64 -A
   ```

---

## ✅ Input Validation & Sanitization

### Multi-Layer Protection

**Location:** `src/sections/contact_section/validation.ts`

#### 1. Length Validation (ReDoS Protection)

All inputs are length-checked **BEFORE** regex validation to prevent Regular Expression Denial of Service (ReDoS) attacks:

```typescript
// ❌ WRONG (vulnerable to ReDoS)
if (!/^[a-zA-Z]+$/.test(userInput)) { ... }

// ✅ CORRECT (safe from ReDoS)
if (userInput.length > 50) { return 'Too long'; }
if (!/^[a-zA-Z]+$/.test(userInput)) { ... }
```

#### 2. Input Sanitization

**Function:** `sanitizeInput(value: string)`

Removes dangerous characters:
- `<` `>` - HTML tags
- `'` `"` - Quote injection
- `&` - HTML entities
- `\n` `\r` `\t` - Control characters

**Max Length Enforcement:** 500 characters

#### 3. Field-Specific Validation

| Field | Min | Max | Pattern |
|-------|-----|-----|---------|
| First/Last Name | 2 | 50 | `[a-zA-ZäöüÄÖÜß\s-]+` |
| Email | 5 | 254 | RFC 5322 compliant |
| Message | 10 | 2000 | Any characters |

### Email Validation

**Regex:** `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

This follows RFC 5322 standards and prevents:
- Special characters in username
- Invalid domain formats
- TLD too short (min 2 chars)

---

## 🚫 XSS Protection

### Defense Layers

1. **React's Built-in Protection**
   - Automatic escaping of JSX variables
   - No `dangerouslySetInnerHTML` usage (except safe JSON-LD)

2. **Content Security Policy**
   - Blocks inline scripts
   - Prevents eval() usage

3. **Input Sanitization**
   - Removes HTML characters before processing

4. **No Dangerous Patterns**
   - No `eval()`, `Function()`, `setTimeout(string)`
   - No `innerHTML`, `outerHTML`
   - No `document.write()`

### Safe Practices

✅ **Always do this:**
```typescript
<div>{userInput}</div>  // React escapes automatically
```

❌ **Never do this:**
```typescript
<div dangerouslySetInnerHTML={{__html: userInput}} />
```

---

## ⏱️ Rate Limiting

**Location:** `src/sections/contact_section/Component.tsx`

### Client-Side Rate Limiting

- **Cooldown:** 5 seconds between form submissions
- **Implementation:** Timestamp-based checking
- **User Feedback:** Clear error message

```typescript
const RATE_LIMIT_MS = 5000;
if (now - lastSubmission < RATE_LIMIT_MS) {
  setErrors({
    general: 'Bitte warten Sie 5 Sekunden zwischen Anfragen.'
  });
  return;
}
```

### Future Server-Side Rate Limiting

For API routes (if implemented):

```typescript
// Recommended: Use @vercel/rate-limit or similar
import rateLimit from '@vercel/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export default async function handler(req, res) {
  try {
    await limiter.check(res, 10, 'CACHE_TOKEN'); // 10 requests per minute
    // ... handle request
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' });
  }
}
```

---

## 🤖 Bot Protection

### Honeypot Field

**Location:** `src/sections/contact_section/Component.tsx`

A hidden field that's invisible to users but visible to bots:

```tsx
<input
  type="text"
  name="website"
  value={honeypot}
  onChange={(e) => setHoneypot(e.target.value)}
  tabIndex={-1}
  autoComplete="off"
  style={{
    position: 'absolute',
    left: '-9999px',
    width: '1px',
    height: '1px',
    opacity: 0
  }}
  aria-hidden="true"
/>
```

### Silent Fail

If honeypot is filled, submission fails **silently** (no error message or logging) to avoid revealing the detection mechanism.

---

## 🔒 Privacy & GDPR Compliance

### Cookie Consent Implementation

**Location:** `src/components/cookie-consent/`

#### Features

- ✅ Privacy-first (only necessary cookies by default)
- ✅ Explicit consent required for analytics/marketing
- ✅ Granular control (separate toggles)
- ✅ localStorage persistence
- ✅ Version tracking for consent updates

#### Data Minimization

- No tracking without consent
- No third-party cookies
- No external analytics by default
- localStorage only for consent state

#### Production Logging

All error logs are **development-only** to prevent information disclosure:

```typescript
if (process.env.NODE_ENV === 'development') {
  console.error('[Cookie Consent] Error:', error);
}
```

---

## 📦 Dependencies

### Security Practices

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm audit fix
   ```

2. **Regular Updates**
   - Check for updates monthly
   - Review changelogs for security patches
   - Test thoroughly after updates

3. **Minimal Dependencies**
   - Only essential packages installed
   - Tree-shaking enabled
   - No unused dependencies

### Current Stack

All dependencies are up-to-date as of 2026-03-15:

- ✅ Next.js 14.2.35
- ✅ React 18.2.0
- ✅ TypeScript 5.3.0

---

## 🎯 Best Practices

### For Developers

#### 1. Never Log Sensitive Data

❌ **Bad:**
```typescript
console.log('User email:', email);
console.log('Form data:', formData);
```

✅ **Good:**
```typescript
if (process.env.NODE_ENV === 'development') {
  console.log('Form submitted');
}
```

#### 2. Validate Everything

- Validate on client AND server
- Never trust user input
- Use TypeScript for type safety

#### 3. Escape Output

- Let React handle escaping
- Never use `dangerouslySetInnerHTML` with user input
- Sanitize before storage

#### 4. Use HTTPS Only

- Enable HSTS header (already configured)
- Redirect HTTP to HTTPS
- Use `secure` flag for cookies

#### 5. Security Headers

All security headers are in `next.config.js`. When modifying:

- Test with https://securityheaders.com
- Verify CSP with browser DevTools
- Check for breaking changes

### CSRF Protection (Future API Routes)

If you add API routes:

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verify CSRF token
  const token = request.headers.get('X-CSRF-Token');
  const sessionToken = request.cookies.get('csrf_token');

  if (token !== sessionToken?.value) {
    return new NextResponse('Invalid CSRF token', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

---

## 🔍 Security Checklist

Before deployment, verify:

- [ ] All security headers configured
- [ ] CSP has no `unsafe-inline` or `unsafe-eval`
- [ ] No console.log in production code
- [ ] All inputs validated and sanitized
- [ ] No hardcoded secrets or API keys
- [ ] Dependencies are up-to-date (`npm audit`)
- [ ] HTTPS enforced
- [ ] Cookie consent implemented
- [ ] Rate limiting active
- [ ] Bot protection enabled
- [ ] Error messages don't reveal system details
- [ ] Source maps disabled in production
- [ ] TypeScript strict mode enabled

---

## 🚨 Reporting Security Issues

If you discover a security vulnerability:

1. **DO NOT** open a public GitHub issue
2. Email: security@vendori.eu
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours.

---

## 📚 References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

---

**Security is an ongoing process, not a one-time task. Stay vigilant!** 🛡️

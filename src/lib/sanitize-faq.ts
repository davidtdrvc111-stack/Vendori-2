/**
 * FAQ HTML Sanitization Utility
 *
 * Sanitizes FAQ HTML at build time using a custom whitelist-based approach.
 * Configured to allow only safe tags used in existing FAQ markup.
 * No external dependencies - pure JavaScript implementation.
 *
 * @module sanitize-faq
 */

/**
 * Allowed HTML tags for FAQ content
 */
const ALLOWED_TAGS = new Set([
  'p', 'strong', 'span',
  'ul', 'li',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'div'
]);

/**
 * Allowed HTML attributes
 */
const ALLOWED_ATTRS = new Set(['class']);

/**
 * Dangerous protocols that should be blocked
 */
const DANGEROUS_PROTOCOLS = /^(javascript|data|vbscript):/i;

/**
 * Sanitize FAQ HTML with custom whitelist
 *
 * This function removes potentially dangerous HTML while preserving
 * the safe formatting tags used in FAQ content.
 *
 * Allowed tags (based on current FAQ structure):
 * - Text: p, strong, span
 * - Lists: ul, li
 * - Tables: table, thead, tbody, tr, th, td
 * - Containers: div
 *
 * Blocked content:
 * - Script tags and event handlers
 * - Iframes and embeds
 * - Unsafe protocols (javascript:, data:)
 * - Event handler attributes (onclick, onerror, etc.)
 * - Data attributes
 *
 * @param html - Raw HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 *
 * @example
 * ```typescript
 * const safe = sanitizeFAQHTML('<p>Safe content</p><script>alert("XSS")</script>');
 * // Returns: '<p>Safe content</p>'
 * ```
 */
export function sanitizeFAQHTML(html: string): string {
  try {
    // Remove script tags and their content
    let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Remove style tags and their content
    sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    // Remove event handler attributes (onclick, onerror, etc.)
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
    sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, '');

    // Remove dangerous protocols from href and src
    sanitized = sanitized.replace(/\s*(href|src)\s*=\s*["']?(javascript|data|vbscript):[^"'\s>]*/gi, '');

    // Remove data-* attributes
    sanitized = sanitized.replace(/\s*data-\w+\s*=\s*["'][^"']*["']/gi, '');

    // Filter tags: keep only allowed tags
    sanitized = sanitized.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (match, tagName) => {
      const tag = tagName.toLowerCase();

      // If tag is not allowed, remove it but keep content
      if (!ALLOWED_TAGS.has(tag)) {
        return '';
      }

      // For allowed tags, filter attributes
      return match.replace(/\s+([a-z-]+)\s*=\s*["']?([^"'\s>]*)["']?/gi, (attrMatch, attrName, attrValue) => {
        const attr = attrName.toLowerCase();

        // Only keep allowed attributes
        if (!ALLOWED_ATTRS.has(attr)) {
          return '';
        }

        // Check for dangerous protocols in attribute values
        if (DANGEROUS_PROTOCOLS.test(attrValue)) {
          return '';
        }

        // Return sanitized attribute
        return ` ${attr}="${attrValue.replace(/["'<>]/g, '')}"`;
      });
    });

    // Remove any remaining dangerous patterns
    sanitized = sanitized
      .replace(/javascript:/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '');

    // Development warning for removed content
    if (process.env.NODE_ENV === 'development' && sanitized !== html) {
      console.warn('[Sanitization] Content was modified:', {
        original: html.substring(0, 100) + '...',
        sanitized: sanitized.substring(0, 100) + '...'
      });
    }

    return sanitized;
  } catch (error) {
    console.error('[Sanitization] Error sanitizing HTML:', error);
    // Fallback: strip all HTML in case of error
    return html.replace(/<[^>]*>/g, '');
  }
}

/**
 * Batch sanitize FAQ items
 *
 * Processes an array of FAQ items and sanitizes the 'answer' field
 * of each item while preserving all other fields.
 *
 * @param items - Array of FAQ items with 'answer' property
 * @returns Array of FAQ items with sanitized answers
 *
 * @example
 * ```typescript
 * const faqs = [
 *   { question: 'Q1?', answer: '<p>Answer</p><script>bad</script>' },
 *   { question: 'Q2?', answer: '<p>Safe answer</p>' }
 * ];
 * const safe = sanitizeFAQItems(faqs);
 * // Returns array with sanitized answers
 * ```
 */
export function sanitizeFAQItems<T extends { answer: string }>(
  items: T[]
): T[] {
  return items.map(item => ({
    ...item,
    answer: sanitizeFAQHTML(item.answer)
  }));
}

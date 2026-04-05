/**
 * FAQ HTML Sanitization Utility
 *
 * Sanitizes FAQ HTML at build time using DOMPurify.
 * Configured to allow only safe tags used in existing FAQ markup.
 *
 * @module sanitize-faq
 */

import DOMPurify from 'isomorphic-dompurify';

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
  // Configure DOMPurify for FAQ-specific needs
  const config = {
    ALLOWED_TAGS: [
      'p', 'strong', 'span',
      'ul', 'li',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div'
    ],
    ALLOWED_ATTR: ['class'], // Only allow class attributes for styling
    KEEP_CONTENT: true, // Preserve text content if tags are removed
    ALLOW_DATA_ATTR: false, // Block data-* attributes
    ALLOW_UNKNOWN_PROTOCOLS: false, // Block javascript:, data: URLs
    SAFE_FOR_TEMPLATES: true, // Extra protection against template injection
  };

  try {
    const sanitized = DOMPurify.sanitize(html, config);

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

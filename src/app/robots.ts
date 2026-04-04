import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow AI crawlers (for transparency and documentation)
      {
        userAgent: [
          'GPTBot',           // OpenAI ChatGPT
          'ChatGPT-User',     // OpenAI ChatGPT (user-triggered)
          'ClaudeBot',        // Anthropic Claude
          'Claude-Web',       // Anthropic Claude (web search)
          'PerplexityBot',    // Perplexity AI
          'Google-Extended',  // Google Bard/Gemini
          'anthropic-ai',     // Anthropic (alternative)
          'Amazonbot',        // Amazon (for potential future AI)
          'FacebookBot',      // Meta AI
          'Applebot-Extended',// Apple Intelligence
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://vendori.eu/sitemap.xml',
  };
}

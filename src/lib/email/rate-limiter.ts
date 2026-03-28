/**
 * Server-seitiger Rate Limiter für Kontaktformular
 *
 * Verhindert Spam und Missbrauch durch IP-basierte Drosselung
 * Standard: Max. 5 Anfragen pro Minute pro IP
 */

interface RateLimitResult {
  success: boolean;
  remaining?: number;
  resetTime?: Date;
}

/**
 * In-Memory Map zur Speicherung von Submission-Timestamps
 * Key: IP-Adresse
 * Value: Array von Timestamps (Millisekunden)
 */
const submissions = new Map<string, number[]>();

/**
 * Konfiguration aus Umgebungsvariablen
 * Fallback auf sichere Standardwerte
 */
const RATE_LIMIT_WINDOW = parseInt(
  process.env.RATE_LIMIT_WINDOW || '60000',
  10
); // 1 Minute (60000ms)
const RATE_LIMIT_MAX_REQUESTS = parseInt(
  process.env.RATE_LIMIT_MAX_REQUESTS || '5',
  10
); // Max. 5 Anfragen

/**
 * Prüft ob eine IP-Adresse das Rate Limit überschritten hat
 *
 * @param ip - IP-Adresse des Clients
 * @returns RateLimitResult mit Erfolgs-Status und verbleibenden Anfragen
 *
 * @example
 * ```typescript
 * const result = checkRateLimit('192.168.1.1');
 * if (!result.success) {
 *   return new Response('Too Many Requests', { status: 429 });
 * }
 * ```
 */
export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();

  // IP-Submissions abrufen (oder leeres Array wenn neu)
  const ipSubmissions = submissions.get(ip) || [];

  // Nur Submissions innerhalb des Zeitfensters behalten (alte entfernen)
  const recentSubmissions = ipSubmissions.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  );

  // Prüfen ob Limit überschritten
  if (recentSubmissions.length >= RATE_LIMIT_MAX_REQUESTS) {
    // Berechne wann älteste Submission abläuft
    const oldestSubmission = Math.min(...recentSubmissions);
    const resetTime = new Date(oldestSubmission + RATE_LIMIT_WINDOW);

    return {
      success: false,
      remaining: 0,
      resetTime,
    };
  }

  // Neue Submission hinzufügen
  recentSubmissions.push(now);
  submissions.set(ip, recentSubmissions);

  // Verbleibende Anfragen berechnen
  const remaining = RATE_LIMIT_MAX_REQUESTS - recentSubmissions.length;

  return {
    success: true,
    remaining,
  };
}

/**
 * Bereinigt alte Einträge aus dem submissions-Map
 * Sollte periodisch aufgerufen werden um Memory-Leaks zu verhindern
 *
 * @param maxAge - Maximales Alter in Millisekunden (Standard: 1 Stunde)
 *
 * @example
 * ```typescript
 * // Alle 10 Minuten bereinigen
 * setInterval(() => cleanupOldSubmissions(), 10 * 60 * 1000);
 * ```
 */
export function cleanupOldSubmissions(
  maxAge: number = 60 * 60 * 1000
): void {
  const now = Date.now();
  let cleaned = 0;

  for (const [ip, timestamps] of submissions.entries()) {
    // Filtere Submissions die älter als maxAge sind
    const validSubmissions = timestamps.filter(
      (timestamp) => now - timestamp < maxAge
    );

    if (validSubmissions.length === 0) {
      // Keine gültigen Submissions mehr -> IP entfernen
      submissions.delete(ip);
      cleaned++;
    } else if (validSubmissions.length < timestamps.length) {
      // Einige Submissions sind abgelaufen -> aktualisieren
      submissions.set(ip, validSubmissions);
    }
  }

  if (process.env.NODE_ENV === 'development' && cleaned > 0) {
    console.log(`[Rate Limiter] Cleaned up ${cleaned} expired IP entries`);
  }
}

/**
 * Gibt Statistiken über den aktuellen Rate Limiter Status zurück
 * Nützlich für Monitoring und Debugging
 */
export function getRateLimiterStats(): {
  totalIPs: number;
  totalSubmissions: number;
  config: {
    windowMs: number;
    maxRequests: number;
  };
} {
  let totalSubmissions = 0;
  for (const timestamps of submissions.values()) {
    totalSubmissions += timestamps.length;
  }

  return {
    totalIPs: submissions.size,
    totalSubmissions,
    config: {
      windowMs: RATE_LIMIT_WINDOW,
      maxRequests: RATE_LIMIT_MAX_REQUESTS,
    },
  };
}

// Automatische Bereinigung alle 15 Minuten
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    cleanupOldSubmissions();
  }, 15 * 60 * 1000);
}

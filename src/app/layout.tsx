import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { CookieBanner } from '@/components/cookie-consent';
import { ThemeProvider } from '@/components/theme-provider';

// Geist Mono - Headlines (h1, h2) - DSGVO-konform (lokal gehostet)
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff2',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
});

// Plus Jakarta Sans - Body & Sub-Headers - DSGVO-konform (lokal gehostet)
const plusJakartaSans = localFont({
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VENDORi GmbH',
  description: 'Ihre Partner für digitale Lösungen und innovative Technologie',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' }, // neutral-800
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} ${plusJakartaSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}

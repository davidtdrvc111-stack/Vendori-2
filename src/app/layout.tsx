import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import { CookieBanner } from '@/components/cookie-consent';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'VENDORi GmbH',
  description: 'Ihre Partner für digitale Lösungen und innovative Technologie',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

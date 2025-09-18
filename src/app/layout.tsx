import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PHProvider } from '@/components/providers/posthog-provider';
import PostHogPageView from './PostHogPageView';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roko Kovač',
  description: 'Roko Kovač - Software Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://cdn.barelytics.io/script.min.js"
          data-url="/event"
          data-id="fa655c01-8240-4ea4-b854-ce7840fb5ace"
        ></Script>
      </head>
      <PHProvider>
        <body className={inter.className}>
          <PostHogPageView />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import dynamic from 'next/dynamic';
import { PHProvider } from '@/components/providers/posthog-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roko Kovač',
  description: 'Roko Kovač - Software Developer',
};

const PostHogPageView = dynamic(() => import('./posthog-pageview'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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

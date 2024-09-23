import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

import localFont from 'next/font/local';

import { Sidebar } from './_components/Sidebar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'CS2 Plugin',
  description: '',
} satisfies Metadata;

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: Props): ReactNode {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}

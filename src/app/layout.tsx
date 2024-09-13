import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/css/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = (props: { children: React.ReactNode }): JSX.Element => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

RootLayout.displayName = 'RootLayout';

export default RootLayout;
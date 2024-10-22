import ReduxStoreProvider from '@/app/Providers/ReduxStoreProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Link Sharing APP',
  description: 'A challenge from Frontend Mentor Platform.',
};

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/images/logo-devlinks-small.svg" type="image/x-icon" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen h-full`}>
        <ReduxStoreProvider>
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
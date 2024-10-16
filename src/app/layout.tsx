import { Header } from "@/app/components/ui/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Link Sharing APP",
  description: "A challenge from Frontend Mentor Platform.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen h-full`}
      >
        <header className="max-w-[1300px] w-full mx-auto my-10 bg-white p-6 rounded-lg">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

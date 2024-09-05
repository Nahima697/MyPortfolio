import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nunito_Sans} from 'next/font/google';
import { Header } from "./_components/Header";
import { PageTransition } from "./_components/PageTransition";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})
 

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
  title: "Nahima Toumi Développeuse Web",
  description: "Développeuse Junior PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} "font-sans-h-full bg-background text-foreground" antialiased`}
      >
        <Header/>
      <PageTransition> {children}</PageTransition>
       
      </body>
    </html>
  );
}

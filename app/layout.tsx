import type { Metadata } from "next";
import localFont from '@next/font/local'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const bellefair = localFont({
  src: '../public/fonts/Bellefair-Regular.ttf',
  variable: '--font-bellefair'
})
const dancingscript = localFont({
  src: '../public/fonts/DancingScript.ttf',
  variable: '--font-dancingscript'
})

export const metadata: Metadata = {
  title: "Ashwin Portfolio",
  description: "The portfolio website of Venkata Sai Ashwin Bhagavatula",
};

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingscript.variable} ${bellefair.variable} bg-primaryBgLight`}>
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}

import { Geist, Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"
import LinkedIn from "./images/in-logo/in-logo/InBug-Black.png";
import GitHub from "./images/github-logo/github-mark/github-mark.png";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: '400',
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "My portfolio.",
};

function Header() {
  return (
    <header className="bg-[#FFFFFF] py-4 text-[#022d33] font-mono font-bold">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-evenly">
          <div className="hover:bg-gray-300 hover:ring-4 hover:ring-gray-300 hover:rounded font-bold">
            <Link href="/" className="text=[#022d33]">Home</Link>
          </div>
          <div className="hover:bg-gray-300 hover:ring-4 hover:ring-gray-300 hover:rounded font-bold">
            <Link href="projects" className="text=[#022d33]">Projects</Link>
          </div>
        </nav >
      </div >
    </header >
  )
}

function Footer() {
  return (
    <footer className="bg-[#FFFFFF] py-4 text-[#022d33] font-mono font-bold">
      <div className="container mx-auto px-4 flex-row-reverse flex gap-7 mr-0 items-end">
        <a href="https://www.linkedin.com/in/tharny-elilvannan/">
          <Image src={LinkedIn} height={25} alt="LinkedIn Link" />
        </a>
        <a href="https://github.com/tharnyelilvannan">
          <Image src={GitHub} height={25} alt="GitHub Link" />
        </a>
        <h1>Made with ♥️ by தரணி</h1>
      </div >
    </footer >
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
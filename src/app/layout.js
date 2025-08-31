import { Geist, Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"

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
    <header className="bg-[#FFFFFF] py-4 text-[#022d33] font-mono">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="hover:bg-gray-300 hover:ring-4 hover:ring-gray-300 hover:rounded">
            <Link href="/" className="text=[#022d33]">Home</Link>
          </div>
          <div className="hover:bg-gray-300 hover:ring-4 hover:ring-gray-300 hover:rounded">
            <Link href="about-me" className="text=[#022d33]">About Me</Link>
          </div>
          <div className="hover:bg-gray-300 hover:ring-4 hover:ring-gray-300 hover:rounded">
            <Link href="projects" className="text=[#022d33]">Projects</Link>
          </div>
        </nav >
      </div >
    </header >
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
      </body>
    </html>
  );
}
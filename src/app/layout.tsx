
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbars from "@/components/navbars/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact | My primer Next.js",
  description: "curso Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider> 
            <Navbars />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

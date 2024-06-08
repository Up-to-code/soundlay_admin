import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className=" bg-background    min-h-screen">
        <Navbar />
        <main
          className={cn(
            "text-white font-sans antialiased max-w-5xl m-auto  ",
            fontSans.variable
          )}
        >
          {children}
          <Toaster  />
        </main>
        <Footer/>
      </body>
    </html>
  );
}

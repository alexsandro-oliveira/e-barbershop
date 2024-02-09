import { Toaster } from "@/app/_components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/footer";
import AuthProvider from "./_providers/auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

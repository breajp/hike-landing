import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hike | 17Sigma",
  description: "Scalable, secure, and highly available architecture designed for the future.",
  icons: {
    icon: "/favicon_black.png",
    apple: "/favicon_black.png",
  },
  openGraph: {
    title: "Hike | 17Sigma",
    description: "Scalable, secure, and highly available architecture designed for the future.",
    images: ["/favicon_black.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

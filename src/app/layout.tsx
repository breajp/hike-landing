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
    icon: "https://files.slack.com/files-pri/T01Q7LJG952-F0AGBK8M7DJ/1080x1080-06.png?pub_secret=8eece3088c",
    apple: "https://files.slack.com/files-pri/T01Q7LJG952-F0AGBK8M7DJ/1080x1080-06.png?pub_secret=8eece3088c",
  },
  openGraph: {
    title: "Hike | 17Sigma",
    description: "Scalable, secure, and highly available architecture designed for the future.",
    images: ["https://files.slack.com/files-pri/T01Q7LJG952-F0AGBK8M7DJ/1080x1080-06.png?pub_secret=8eece3088c"],
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

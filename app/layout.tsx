import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mossgrid",
  description: "hacker group based in Nigeria",

  verification: {
    google: "",
  },
  keywords: [
    "Full Stack Developer",
    "Software developer Group",
    "Open Source Enthusiast",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "mossgrid",
      url: "https://mossgrid.netlify.app/",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mossgrid.netlify.app/",
    description: "hacker group based in Nigeria",
    images: [
      {
        url: "/mg.png",
        width: 459,
        height: 820,
        alt: "mossgrid",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster_Two, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobsterTwo = Lobster_Two({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lobster-two",
  preload: true,
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Elise Philipsson - Frontend Developer | Stockholm",
  description:
    "Stockholm-based frontend developer specializing in React, Next.js, and TypeScript. Creating user-friendly, accessible web applications with modern JavaScript frameworks. View portfolio projects and get in touch for collaboration opportunities.",
  keywords:
    "frontend developer, React, Next.js, TypeScript, Stockholm, web development, UI/UX, accessibility, JavaScript, Tailwind CSS",
  authors: [{ name: "Elise Philipsson" }],
  creator: "Elise Philipsson",
  openGraph: {
    title: "Elise Philipsson - Frontend Developer",
    description:
      "Stockholm-based frontend developer creating beautiful, accessible web experiences with React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elise Philipsson - Frontend Developer",
    description:
      "Stockholm-based frontend developer creating beautiful, accessible web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Stockholm-based frontend developer specializing in React, Next.js, and TypeScript. Creating user-friendly, accessible web applications with modern JavaScript frameworks. View portfolio projects and get in touch for collaboration opportunities."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lobsterTwo.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

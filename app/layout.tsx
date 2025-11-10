import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Vertex - Діджитал Агенція | Створення Сайтів та Веб-Розробка в Україні",
  description: "Vertex - професійна діджитал агенція. Створюємо веб-сайти, односторінкові сайти, інтернет-магазини та корпоративні сайти. Гарантія 5 років, підтримка 24/7. Від 300$. Харків, Україна.",
  keywords: "створення сайтів, веб-розробка, діджитал агенція, односторінковий сайт, інтернет-магазин, корпоративний сайт, веб-дизайн, розробка сайтів Україна, Харків, Vertex",
  authors: [{ name: "Vertex Digital Agency" }],
  robots: "index, follow",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: "c3VuA-rKtrEzRktLeYP7TBf5lY_E0NzW2FDDB1vaL8I",
  },
  openGraph: {
    title: "Vertex - Діджитал Агенція | Створення Сайтів",
    description: "Професійна розробка сайтів та веб-рішень. Гарантія 5 років, підтримка 24/7. Від 300$.",
    type: "website",
  },
  alternates: {
    canonical: "https://vertex-web.com.ua",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

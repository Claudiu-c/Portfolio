import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eight-sigma-17.vercel.app"),
  title: "Claudiu Căpățână | Web Developer",
  description:
    "Explore my web development projects built with Next.js, React, TypeScript and modern web technologies.",
  icons: {
    icon: "/icon-cc.png",
  },
  openGraph: {
    title: "Claudiu Căpățână | Web Developer",
    description:
      "Explore my web development projects built with Next.js, React, TypeScript and modern web technologies.",
    url: "https://portfolio-eight-sigma-17.vercel.app/",
    siteName: "Claudiu Căpățână Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Claudiu Căpățână web developer portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudiu Căpățână | Web Developer",
    description:
      "Explore my web development projects built with Next.js, React, TypeScript and modern web technologies.",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

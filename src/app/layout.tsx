import { siteConfig } from "@/config/site";
import ReduxProvider from "@/contexts/ReduxProvider";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import "./globals.css";

const Inter = localFont({
  src: "../app/fonts/InterVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "UI Shadcn",
    "Next js Template",
    "Next js Starter kit",
    "Next js Boilerplate",
    "Next js Boilerplate Template",
  ],
  authors: [
    {
      name: "Rejaul Karim",
      url: "https://github.com/rejaulkariim",
    },
  ],
  creator: "Rejaul Karim",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@rejaulkariim",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", Inter.className)}>
        <ReduxProvider>
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}

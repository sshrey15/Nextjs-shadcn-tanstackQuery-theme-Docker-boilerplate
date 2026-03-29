import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import QueryProvider from "@/app/providers/query-provider";

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/Gilroy-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Heavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Optident - Dental Software",
  description: "Aps Security Challenge - Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gilroy.variable}  antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <QueryProvider>
            {children}
          </QueryProvider>
   
          </ThemeProvider>
      
      </body>
    </html>
  );
}

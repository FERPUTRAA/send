import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { QueryProvider } from "@/utils/QueryProvider";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "sendthesong-clone",
  description: "Express your untold message through the song.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <QueryProvider>
        <body>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}

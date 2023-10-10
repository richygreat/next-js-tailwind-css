import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vinr.eu"),
  title: "vinr GmbH",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "flex min-h-full dark:bg-slate-900 dark:text-white",
        )}
      >
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}

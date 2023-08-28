import { ClerkProvider } from "@clerk/nextjs";
// importing fonts
import { Inter } from "next/font/google";

import "../globals.css";

// this is for SEO
export const metadata = {
  title: "Threads",
  description: "This is a next,js meta threads app",
};

// getting font in next
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* This inter.classname will apply this font to the body */}
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

/**
 Notes - 
    * THis layout is only applied to the routes in this (auth folder)
 */

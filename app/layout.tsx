import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import { useEffect, useState } from "react";


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences",
};

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <Navbar />
      <body className={font.className}>{children}</body>
    </html>
  );
}

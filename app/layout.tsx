
import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";


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
      <ClientOnly>
        <ToasterProvider />
        <Navbar />
        <RegisterModal />
      </ClientOnly>
      <body className={font.className}>{children}</body>
    </html>
  );
}

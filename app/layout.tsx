
import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences",
};

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <ClientOnly>
        <ToasterProvider />
        <Navbar currentUser={currentUser}/>
        <RentModal />  
        <RegisterModal />
        <LoginModal />
        <SearchModal />
      </ClientOnly>
      <body className="pb-20 pt-28">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";


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
      <body className={font.className}>{children}</body>
      <div className=" flex items-center justify-center">
        <p className=" text-3xl">fasdggdrg</p>
      </div>
    </html>
  );
}

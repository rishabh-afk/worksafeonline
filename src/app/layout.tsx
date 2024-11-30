import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { Big_Shoulders_Text } from "next/font/google";

export const bigShoulders = Big_Shoulders_Text({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All available weights
  subsets: ["latin"], // Specify the subsets
  display: "swap", // Optional: controls how the font is rendered
});

import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <Navbar />
        <div id="modal-root"></div>
        <div className="min-h-screen w-full mx-auto">{children}</div>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}

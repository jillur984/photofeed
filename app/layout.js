import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photo Feed App",
  description: "A photo feed app build by Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="container py-4 lg:py-8">{children}</div>
        <div id="modal-root-content"/>
      </body>
    </html>
  );
}

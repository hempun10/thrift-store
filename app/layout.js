import Navbar from "@/components/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";
import FooterSection from "@/components/FooterSection";

const jost = Jost({
  weight: ["400", "700", "300", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Thrift Store Redesign",
  description: "Your Next Destine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <main className="app">
          <Navbar />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}

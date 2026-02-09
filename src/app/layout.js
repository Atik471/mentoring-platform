import { Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const shipporiMincho = Shippori_Mincho({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-shippori",
});

export const metadata = {
  title: "MentorPlatform - Find Your Perfect Mentor",
  description: "Connect with industry experts and experienced mentors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${shipporiMincho.variable} antialiased`}
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

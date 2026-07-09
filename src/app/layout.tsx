import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Video Editing Services Company | Video Caddy",
    template: "%s | Video Caddy",
  },
  description:
    "Video Caddy is a leading video editing and post-production outsourcing partner to video content creators and production houses worldwide.",
  keywords: [
    "video editing",
    "post-production",
    "video editing services",
    "outsourcing",
    "audio editing",
    "animation",
  ],
  openGraph: {
    title: "Video Editing Services Company | Video Caddy",
    description:
      "Professional video editing and post-production services for content creators and production houses worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Video Caddy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

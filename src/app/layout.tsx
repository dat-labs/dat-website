import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigationBar from "@/components/client-components/top-navigation-bar";
import Footer from "@/components/server-components/footer";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dat website",
  description: "dat website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <div className="border-b-2">
          <div className="w-full">
            <TopNavigationBar />
          </div>
        </div>
        <div className="flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

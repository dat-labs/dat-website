import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import TopNavigationBar from "@/components/client-components/top-navigation-bar";
import Footer from "@/components/server-components/footer";
import { clsx } from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dat",
  description: "Dat is a embedding generator and loading tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className)}>
        <div className="border-b-2">
          <div className="w-full">
            <TopNavigationBar />
          </div>
        </div>
        <div className="flex justify-center bg-gray-50 pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

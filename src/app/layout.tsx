import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigationBar from "@/components/client-components/top-navigation-bar";
import Footer from "@/components/server-components/footer";

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
      <body className={inter.className}>
        <div className="flex justify-center border-b-2">
          <div className="w-full">
            <TopNavigationBar />
          </div>
        </div>
        <div className="flex justify-center box-border w-full">
          <div className="w-full">
            <div className="flex justify-center">
              <div className="w-11/12 lg:w-8/12">{children}</div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

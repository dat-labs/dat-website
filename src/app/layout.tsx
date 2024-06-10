import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigationBar from "@/components/client-components/top-navigation-bar";

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
        <div className="flex justify-center border-b-2" >
          <div className="w-full max-w-screen-xl">
            <TopNavigationBar />
          </div>
        </div>
        <div className="flex justify-center box-border">
          <div className="w-full max-w-screen-xl">
            {children}
          </div>
        </div>
        {/* <div style={{display: "grid", gridTemplateColumns: "2fr 8fr 2fr"}}>
          <div></div>
          <div>
            <TopNavigationBar/>
            {children}
          </div>
          <div></div>
        </div> */}
      </body>
    </html>
  );
}

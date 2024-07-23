import type { Metadata } from "next";
import "./globals.css";
import TopNavigationBar from "@/components/client-components/top-navigation-bar";
import Footer from "@/components/server-components/footer";

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
      <body className="font-dm-sans">
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

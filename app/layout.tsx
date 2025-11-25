import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import SideBar from "@/components/header/sidebar";
import BarTabs from "@/components/header/bartabs";
import Explorer from "@/components/header/explorer";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Home"
};
  export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <SideBar />
          <div className="flex flex-col flex-1">
            <main className="flex-1">
              <div className="flex">
                <Explorer />
                <div className="flex flex-col lg:w-full">
                  <BarTabs />
                  {children}
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


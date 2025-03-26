import "~/styles/globals.css"; 
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dance Company",
  description: "Welcome to the Dance Company",
  icons: [{ rel: "icon", url: "/covers/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-[#f8f9fa] text-[#1a3264] min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

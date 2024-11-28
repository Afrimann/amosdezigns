import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I am Amos Pelumi",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-black flex flex-col items-center`}
      >
        {children}
        {/* <Credit/> */}
      </body>
    </html>
  );
}

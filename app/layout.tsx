import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unirate",
  description: "Rate your university today!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/logo-no-background.svg",
            socialButtonsVariant: "iconButton",
          },
        }}
      >
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}

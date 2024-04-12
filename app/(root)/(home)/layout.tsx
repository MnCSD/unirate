import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader, Loader2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Unirate",
  description: "Rate your university today!",
  icons: {
    icon: "/favicon.png",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <ClerkLoading>
        <div className="w-full h-screen flex flex-col items-center justify-center gap-y-4">
          <Image
            src="/logo-no-background.svg"
            alt="Logo"
            width={200}
            height={150}
          />
          <Loader2 className="w-10 h-10 animate-spin text-violet-900/50" />
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <Navbar />
        <div className="flex">
          <section className="pt-[60px] w-full">
            <div>{children}</div>
          </section>
        </div>
      </ClerkLoaded>
    </main>
  );
};

export default HomeLayout;

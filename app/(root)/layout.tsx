import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Unirate",
  description: "Rate your university today!",
  icons: {
    icon: "/favicon.png",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main className="">{children}</main>;
};

export default RootLayout;

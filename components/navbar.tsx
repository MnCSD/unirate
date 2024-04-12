import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getCurrentUser } from "@/lib/user";
import { User, UserMajor } from "@prisma/client";

const Navbar = async () => {
  const { userId } = auth();
  let currentUser: (User & { major: UserMajor }) | null = null;

  if (userId) {
    currentUser = (await getCurrentUser()) as
      | (User & { major: UserMajor })
      | null;
  }

  return (
    <nav className="flex-between fixed top-0 z-[1000] w-full bg-dark-1 px-6 py-4 lg:px-10  shadow-sm bg-white">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/logo-no-background.svg"
          width={120}
          height={80}
          alt="zoom-logo"
          className=""
        />
      </Link>

      {userId ? (
        <div className="flex items-center gap-x-10">
          {/* @ts-ignore */}
          {!currentUser?.major ? (
            <Link href="/major">
              <button className="bg-violet-700/35 px-6 py-2 rounded-full font-adlam text-[#471AA0]">
                Pick your major
              </button>
            </Link>
          ) : (
            <div className="flex flex-col items-start ">
              {" "}
              <span className="text-black font-adlam text-sm">
                {currentUser?.major.university}
              </span>
              <span className="text-violet-900 font-adlam text-sm">
                {/* @ts-ignore */}
                {currentUser?.major.name}
              </span>
            </div>
          )}

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      ) : (
        <div className="flex-between gap-5 bg-violet-500 px-4 py-2 text-white font-adlam rounded-lg">
          <SignInButton mode="modal" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

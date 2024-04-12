"use client";

import React from "react";
import Background from "../public/boy_background.png";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { User, UserMajor } from "@prisma/client";
import Link from "next/link";

type BannerProfileProps = {
  user: User & { major: UserMajor };
};

const BannerProfile = ({ user }: BannerProfileProps) => {
  return (
    <div className="rounded-lg border-1 shadow-md">
      <div
        className="w-full rounded-lg md:flex-row flex flex-col
h-screen
max-h-[32rem]
relative"
      >
        <div className="md:w-[50%] w-full h-full p-2 pl-5 flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-2 flex-col">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
              <img
                src={user.imageUrl}
                alt="Profile"
                className="rounded-full border-2 border-violet-500 object-cover w-[100px] h-[100px]"
              />
            </div>
            <span className="text-lg font-adlam">{user.username}</span>
          </div>

          {user.major ? (
            <div className="mt-5 flex flex-col gap-y-2 justify-center items-center">
              <h1 className="text-xl font-adlam">Major</h1>
              <span className="text-xl font-adlam text-[#471AA0]">
                {user.major.university}
              </span>

              <span className="text-xl font-adlam text-gray-900/50">
                {user.major.name}
              </span>

              <Link href="/major" className="">
                <button className="bg-violet-700/35 px-6 py-2 mt-5 rounded-full font-adlam text-[#471AA0]">
                  Change major
                </button>
              </Link>
            </div>
          ) : (
            <Link href="/major" className="">
              <button className="bg-violet-700/35 px-6 py-2 mt-5 rounded-full font-adlam text-[#471AA0]">
                Pick your major
              </button>
            </Link>
          )}
        </div>

        <div className="md:w-[50%] hidden md:block h-full rounded-lg">
          <img
            src="/boy_background.png"
            alt="Boy"
            className="w-full h-full object-fill rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerProfile;

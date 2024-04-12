import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowItWorksSection = () => {
  return (
    <div className="w-full z-[999] bg-[#FCFBF3] relative">
      <div className="md:max-w-6xl mx-auto w-[90%] py-16 flex items-center flex-col">
        <h2 className="text-2xl font-adlam ">How it works</h2>

        <div className="w-[80%] mt-24">
          <div className="relative h-[1px] bg-gray-900/20 w-full hidden lg:block">
            <div className="top-[-33px] left-[-10px] absolute">
              <span className="text-sm text-gray-900/40 font-semibold">01</span>
              <div className=" h-5 w-5 rounded-full bg-violet-500/40  flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div className="top-[-33px] left-[33%] absolute">
              <span className="text-sm text-gray-900/40 font-semibold">02</span>
              <div className=" h-5 w-5 rounded-full bg-violet-500/40  flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div className="top-[-33px] left-[66%] absolute">
              <span className="text-sm text-gray-900/40 font-semibold">03</span>
              <div className=" h-5 w-5 rounded-full bg-violet-500/40  flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div className="top-[-33px] right-[-10px] absolute">
              <span className="text-sm text-gray-900/40 font-semibold">04</span>
              <div className=" h-5 w-5 rounded-full bg-violet-500/40  flex items-center justify-center">
                <div className="w-[50%] h-[50%] rounded-full bg-violet-500" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-8 w-full
        "
        >
          <div className="md:w-[250px] w-full h-[200px] shadow-lg rounded-lg bg-white flex items-center justify-center flex-col relative transition duration-300 hover:scale-105 cursor-pointer">
            <Image src="/login.svg" width={50} height={50} alt="Login" />

            <div className="flex flex-col items-center">
              <span className="font-adlam">Create an account</span>
              <span className="text-sm text-gray-400 font-semibold">
                or review anonymously
              </span>
            </div>

            <Link href="/">
              <button className="bg-violet-500 w-10 h-10 rounded-full flex items-center justify-center absolute bottom-[-20px] shadow-lg left-[50%] translate-x-[-50%]">
                <ArrowRight className="w-5 h-5 " color="#fff" />
              </button>
            </Link>
          </div>

          <div className="md:w-[250px] w-full h-[200px] shadow-lg rounded-lg bg-white flex items-center justify-center flex-col relative transition hover:scale-105 cursor-pointer">
            <Image src="/uni.svg" width={50} height={50} alt="Login" />

            <div className="flex flex-col items-center">
              <span className="font-adlam">Find your university</span>
              <span className="text-sm text-gray-400 font-semibold">
                Pick your major
              </span>
            </div>

            <Link href="/">
              <button className="bg-violet-500 w-10 h-10 rounded-full flex items-center justify-center absolute bottom-[-20px] shadow-lg left-[50%] translate-x-[-50%]">
                <ArrowRight className="w-5 h-5 " color="#fff" />
              </button>
            </Link>
          </div>

          <div className="md:w-[250px] w-full h-[200px] shadow-lg rounded-lg bg-white flex items-center justify-center flex-col relative transition hover:scale-105 cursor-pointer">
            <Image src="/star.webp" width={50} height={50} alt="Login" />

            <div className="text-center flex flex-col items-center ">
              <span className="font-adlam px-2 text-center">
                Review your university/major
              </span>
              <span className="text-sm text-gray-400 font-semibold">
                Interact with others students
              </span>
            </div>

            <Link href="/">
              <button className="bg-violet-500 w-10 h-10 rounded-full flex items-center justify-center absolute bottom-[-20px] shadow-lg left-[50%] translate-x-[-50%]">
                <ArrowRight className="w-5 h-5 " color="#fff" />
              </button>
            </Link>
          </div>

          <div className="md:w-[250px] w-full h-[200px] shadow-lg rounded-lg bg-white flex items-center justify-center flex-col relative transition hover:scale-105 cursor-pointer">
            <Image src="/help.svg" width={50} height={50} alt="Login" />

            <div className="flex items-center justify-center text-center">
              <span className="font-adlam">
                Empower students to discover their ideal path.
              </span>
            </div>

            <Link href="/">
              <button className="bg-violet-500 w-10 h-10 rounded-full flex items-center justify-center absolute bottom-[-20px] shadow-lg left-[50%] translate-x-[-50%]">
                <ArrowRight className="w-5 h-5 " color="#fff" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;

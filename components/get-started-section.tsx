import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStartedSection = () => {
  return (
    <div className=" bg-[#fff] md:w-full relative h-[600px] flex justify-center items-center w-[90%] mx-auto">
      <div className="absolute top-0 left-[-50px] ">
        <Image src="/Apple.svg" width={150} height={150} alt="Star" />
      </div>

      <div className="absolute top-10 right-[-50px]">
        <Image src="/Backpack.svg" width={200} height={200} alt="Star" />
      </div>

      <div className="absolute top-20 left-[30%] hidden md:block">
        <Image
          src="/Book.svg"
          width={200}
          height={200}
          alt="Star"
          className="rotate-[-20deg]"
        />
      </div>

      <div className="absolute top-[70%] right-[30%] hidden md:block">
        <Image src="/Chalkboard.svg" width={200} height={200} alt="Star" />
      </div>

      <div className="absolute top-[70%] left-[15%]">
        <Image src="/Lamp.svg" width={200} height={200} alt="Star" />
      </div>

      <div className="absolute bottom-[-50px] right-[-50px]">
        <Image src="/Abacus.svg" width={200} height={200} alt="Star" />
      </div>

      <div className="flex flex-col items-center text-center max-w-4xl gap-10 relative z-[999]">
        <p className=" font-adlam text-xl">
          Gain valuable insights and reviews from fellow students to help you
          navigate the journey of choosing the right major. Empower yourself
          with firsthand experiences shared by peers who have walked the path
          before you.
        </p>
        <Link href="/">
          <button className="bg-violet-500 text-white font-adlam px-5 py-2 rounded-lg">
            Get started now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GetStartedSection;

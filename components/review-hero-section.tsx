import Image from "next/image";
import React from "react";

const ReviewHeroSection = () => {
  return (
    <div className=" bg-[#fff] w-full relative h-[600px] flex justify-center items-center">
      <div className="absolute top-0 left-[-50px]">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className=" rotate-90"
        />
      </div>

      <div className="absolute top-[-40px] right-[30%] hidden md:block">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className="rotate-45"
        />
      </div>

      <div className="absolute top-10 right-[-50px]">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className=" rotate-90"
        />
      </div>

      <div className="absolute top-20 left-[30%] hidden md:block">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className="rotate-[-20deg]"
        />
      </div>

      <div className="absolute top-[70%] right-[30%] hidden md:block">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className="rotate-180"
        />
      </div>

      <div className="absolute top-[70%] left-[15%]">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className="rotate-[120deg]"
        />
      </div>

      <div className="absolute bottom-[-50px] right-[-50px]">
        <Image
          src="/star.webp"
          width={150}
          height={150}
          alt="Star"
          className="rotate-[120deg]"
        />
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-[#000] font-adlam text-2xl text-center px-10 md:px-0">
          Rate, review: Empower university choices.
          <br />
          Share your experiences, insights, and opinions to help others make
          informed decisions.
        </h2>

        <button className="px-10 py-3 bg-violet-500/15 text-violet-500 font-adlam rounded-lg">
          Review now
        </button>
      </div>
    </div>
  );
};

export default ReviewHeroSection;

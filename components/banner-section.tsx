import { University } from "@prisma/client";
import { LocateIcon, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

type BannerSectionProps = {
  university: University;
};

const BannerSection = ({
  university: { name, image, location, departments },
}: BannerSectionProps) => {
  return (
    <div className="rounded-lg border shadow-md">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="w-full rounded-lg
  h-screen
  max-h-[32rem]
  p-24
  relative
  overflow-hidden
  block
  z-10
  
 
  bg-cover
  bg-no-repeat
  bg-center
  before:content-['']
  before:absolute
  before:inset-0
  before:block
  before:bg-gradient-to-b
  before:from-black
  before:via-black
  before:to-white
  before:opacity-45
  before:z-[-5]
 "
      >
        <div className="bottom-0 w-full absolute left-0 bg-white rounded-b-lg h-[100px] border-t py-2 px-4 flex items-start gap-x-3">
          <div>
            <Image
              src="/uni.webp"
              alt="Uni"
              width={70}
              height={70}
              objectFit="cover"
            />
          </div>

          <div className="">
            <h3 className="text-xl font-adlam text-violet-900">{name}</h3>

            <div className="flex items-center gap-x-1">
              <MapPin className="w-6 h-6 text-gray-400" />
              <span className="text-[15px] text-gray-400 font-adlam ">
                {location}
              </span>
            </div>

            <div className="flex items-center gap-x-1">
              <span className="text-[14px] text-black/70 font-adlam">
                Departments:
              </span>
              <span className="text-[14px] text-black/70 font-adlam ">
                {departments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

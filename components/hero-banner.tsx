"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import useModalStore from "@/store/modalStore";
import { UniversityRankingsData } from "@/app/(root)/(home)/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { University } from "@prisma/client";

const HeroBanner = ({ universities }: { universities: University[] }) => {
  const [searchText, setSearchText] = useState("");
  const ref = useRef(null);
  const { isOpen, setShowModal } = useModalStore();
  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);
  const [height, setHeight] = useState(0);

  // Check if the searchText is above 2 characters and open the modal but there is a bug that if i type another character it turns it false
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setShowModal(event.target.value.length > 1);

    if (event.target.value.length > 1) {
      setFilteredUniversities(
        //@ts-ignore
        universities.filter((university) =>
          university.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredUniversities(universities);
    }
  };

  if (!filteredUniversities) return;

  return (
    <div className="bg-[#fff] lg:w-full w-[90%] flex items-start h-[650px] mx-auto ">
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/30 z-[1000] pointer-events-none"></div>
      )}

      <div className="lg:w-[45%] w-full items-center justify-center  text-left my-auto flex flex-col ">
        <div className="flex flex-col gap-y-10">
          <h2 className="text-[#000] font-adlam text-4xl">
            Discover, Review, Trust: <br />
            Empowering Your University Journey.
          </h2>

          <form className="w-full ml-auto flex border border-black/15 rounded-lg h-[58px]  relative z-[1000] ">
            <Input
              className="ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-14 rounded-l-lg rounded-r-none border-0"
              placeholder="University"
              value={searchText}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-[200px] bg-[#471AA0] rounded-r-lg font-semibold text-white h-[56px] "
            >
              Search
            </button>

            {/* Modal */}
            {isOpen && (
              <div
                className="absolute bottom-[0] left-[0px] w-[calc(100%+0px)] bg-white z-[1000]  border border-black/15 rounded-b-lg scrollbar-hide  overflow-y-scroll cursor-pointer"
                ref={ref}
                style={{
                  bottom: "-398px",
                  //if height < 400 then height to be as height else 400px
                  height: "400px",
                }}
              >
                {/* @ts-ignore */}
                {filteredUniversities?.map((university: University) => (
                  <Link href={`/university/${university.universityId}`}>
                    <div
                      key={university.id}
                      className="px-3 py-4 border-b border-gray-900/15"
                    >
                      <span>{university.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="hidden w-[55%] lg:flex relative  h-full">
        <div className="absolute left-0 hidden lg:block animate-scale_fade-up">
          <Image
            src="/boy_n.png"
            width={650}
            height={470}
            alt="Boy"
            objectFit="contain"
          />
        </div>

        <div className="absolute bottom-0 right-0 animate-position_opacity-up">
          <Image
            src="/girl.png"
            width={450}
            height={200}
            alt="Girl"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

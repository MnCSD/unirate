import { UniversityRankingsData } from "@/app/(root)/(home)/page";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { University } from "@prisma/client";

const ExploreSection = ({ universities }: { universities: University[] }) => {
  return (
    <div className=" bg-[#FCFBF3] w-full z-[999] relative">
      <div className="md:max-w-6xl mx-auto w-[90%] py-10">
        <div className=" flex items-center justify-between w-full ">
          <div>
            <h4 className="md:text-3xl text-2xl font-adlam">
              Explore Universities
            </h4>
          </div>

          <div>
            <button className="bg-violet-700/35 px-6 py-3 rounded-full font-adlam text-[#471AA0]">
              View All
            </button>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {universities?.slice(0, 12).map((university) => (
                  <div
                    key={university.id}
                    className="relative overflow-hidden rounded-lg bg-white border border-violet-500/15 flex items-center justify-center h-[80px] px-10 hover:translate-y-1 hover:shadow-lg hover:cursor-pointer transition ease-in-out duration-300  "
                  >
                    <div className=" text-center">
                      <h3 className="text-sm">{university.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {universities?.slice(12, 24).map((university) => (
                  <div
                    key={university.id}
                    className="relative overflow-hidden rounded-lg bg-white border border-violet-500/15 flex items-center justify-center h-[80px] px-10 hover:translate-y-1 hover:shadow-lg hover:cursor-pointer transition ease-in-out duration-300  "
                  >
                    <div className=" text-center">
                      <h3 className="text-sm">{university.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-violet-500/50 text-violet-500 font-adlam" />
          <CarouselNext className="bg-violet-500/50 text-violet-500 font-adlam" />
        </Carousel>
      </div>
    </div>
  );
};

export default ExploreSection;

"use client";

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
import DepartmentsPopup from "./departments-popup";
import usePopupDepartments from "@/store/departments-popup-store";

const ExploreDepartments = ({ departments }: { departments: string[] }) => {
  const { isOpenDepartments, setShowDepartmentsPopup } = usePopupDepartments();

  return (
    <div className=" bg-[#FCFBF3] w-full z-[999] relative">
      <div className="md:max-w-6xl mx-auto w-[100%] py-10">
        <div className=" flex items-center justify-between w-full ">
          <div>
            <h4 className="md:text-3xl text-2xl font-adlam">
              Departments <span className="text-violet-700"></span>
            </h4>
          </div>

          {departments.length > 12 && (
            <div>
              <button
                className="bg-violet-700/35 px-6 py-3 rounded-full font-adlam text-[#471AA0]"
                onClick={() => setShowDepartmentsPopup(!isOpenDepartments)}
              >
                View All
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {departments?.slice(0, 12).map((department, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg bg-white border border-violet-500/15 flex items-center justify-center h-[80px] px-10 hover:translate-y-1 hover:shadow-lg hover:cursor-pointer transition ease-in-out duration-300  "
            >
              <div className=" text-center">
                <h3 className="text-sm">{department}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpenDepartments && <DepartmentsPopup departments={departments} />}
    </div>
  );
};

export default ExploreDepartments;

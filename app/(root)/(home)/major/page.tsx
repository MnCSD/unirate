import DiagramFlow from "@/components/diagram-flow";
import { getAllUniversities } from "@/lib/university";
import { Majors } from "@/types";
import { User, currentUser } from "@clerk/nextjs/server";
import { University } from "@prisma/client";
import Image from "next/image";
import React, { useTransition } from "react";

const MajorPage = async () => {
  const user = await currentUser();
  const universities = await getAllUniversities();

  // const majorsEndpoint = "http:localhost:3000/api/majors";

  const response = await fetch("http://localhost:3000/api/majors", {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  const majors = (await response.json()) as Majors;

  const universitiesWithArrays = {};

  for (const university in majors) {
    //@ts-ignore
    universitiesWithArrays[university] = Object.values(majors[university]);
  }

  return (
    <div className="w-full ">
      <div className="w-full  flex lg:items-start items-center bg-[#FCFBF3] rounded-xl h-[calc(100vh-72px)] flex-col lg:flex-row">
        <div className="w-[50%]  items-center justify-start flex-col relative  flex lg:h-full">
          <div className="absolute top-0 left-0 flex items-center flex-col">
            <Image src="/major.svg" alt="Major" width={250} height={250} />
            <span className=" font-adlam">Department of Chemistry</span>
          </div>

          <div className="absolute top-[25%] left-[30%]">
            <Image src="/microscope.svg" alt="Major" width={250} height={250} />
            <span className=" font-adlam">Department of Medical Science</span>
          </div>

          <div className="absolute bottom-10 left-[10%] flex items-center flex-col">
            <Image
              src="/english-class.svg"
              alt="Major"
              width={250}
              height={250}
            />
            <span className=" font-adlam">
              Department of English Language and Literature
            </span>
          </div>

          <div className="absolute bottom-0 right-0 hidden lg:flex items-center flex-col">
            <Image
              src="/online-study.svg"
              alt="Major"
              width={250}
              height={250}
            />
            <span className=" font-adlam">Department of Computer Science</span>
          </div>

          <div className="absolute top-0 right-28 items-center flex-col hidden lg:flex">
            <Image src="/sports.svg" alt="Major" width={250} height={250} />
            <span className=" font-adlam">
              Department of Physical Education
            </span>
          </div>

          <div className="absolute top-[30%] right-[-130px] hidden lg:flex items-center flex-col">
            <Image src="/atom.svg" alt="Major" width={250} height={250} />
            <span className=" font-adlam">Department of Physics</span>
          </div>
        </div>

        <div className="w-[50%] pt-16 flex items-center justify-center ">
          <DiagramFlow
            universities={universities as University[]}
            majors={universitiesWithArrays}
          />
        </div>
      </div>
    </div>
  );
};

export default MajorPage;

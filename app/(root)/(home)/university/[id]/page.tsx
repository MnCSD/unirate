import BannerSection from "@/components/banner-section";
import DepartmentsPopup from "@/components/departments-popup";
import ExploreDepartments from "@/components/explore-departments";
import { getUniversityById } from "@/lib/university";
import { Departments, Majors } from "@/types";
import { University } from "@prisma/client";
import React from "react";

const UniversityPage = async ({ params }: { params: { id: string } }) => {
  //convert id to int
  const id = parseInt(params.id);
  //loading state as we get university

  const university = await getUniversityById(id);

  if (!university) return null;

  const response = await fetch("http://localhost:3000/api/majors", {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  const majors = (await response.json()) as Majors;

  const departmentsWithArrays: Departments = {};

  for (const university in majors) {
    //@ts-ignore
    departmentsWithArrays[university] = Object.values(majors[university]);
  }

  //based on the name of the university get the departments
  const departments = departmentsWithArrays[university.name];

  return (
    <div className="w-full bg-[#FCFBF3]">
      <div className="md:max-w-6xl mx-auto w-[90%] py-10">
        <BannerSection university={university} />

        <ExploreDepartments departments={departments} />
      </div>
    </div>
  );
};

export default UniversityPage;

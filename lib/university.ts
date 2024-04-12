import { db } from "@/lib/db";

export const getUniversityById = async (id: number) => {
  const university = await db.university.findUnique({
    where: {
      universityId: id,
    },
  });

  return university;
};

export const getAllUniversities = async () => {
  const universities = await db.university.findMany();

  return universities;
};

"use server";

import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { getCurrentUser } from "@/lib/user";

export const createUserMajor = async (name: string, university: string) => {
  const user = await currentUser();

  console.log(user);

  if (!user || !user.id) throw new Error(`User does not exist`);

  console.log(`Creating major for user ${user.id}`);
  console.log(name);

  const userDb = await getCurrentUser();

  if (!userDb) throw new Error(`User does not exist`);

  const existingMajor = await db.userMajor.findFirst({
    where: {
      userId: userDb.id,
    },
  });

  if (existingMajor) {
    const major = await db.userMajor.update({
      where: {
        id: existingMajor.id,
      },
      data: {
        name: name,
        university: university,
      },
    });

    revalidatePath(`/`);
    revalidatePath(`/major`);

    return major;
  }

  const major = await db.userMajor.create({
    data: {
      userId: userDb.id as string,
      name,
      university,
    },
  });

  revalidatePath(`/`);
  revalidatePath(`/major`);

  return major;
};

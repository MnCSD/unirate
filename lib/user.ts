import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const getCurrentUser = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const currentUser = await db.user.findUnique({
    where: {
      externalUserId: userId,
    },
    include: {
      major: true,
    },
  });

  return currentUser;
};

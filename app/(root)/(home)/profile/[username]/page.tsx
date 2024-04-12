import BannerProfile from "@/components/banner-profile";
import ProfileSection from "@/components/profile-section";
import { getCurrentUser } from "@/lib/user";
import { auth } from "@clerk/nextjs/server";
import { User, UserMajor } from "@prisma/client";
import React from "react";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  auth().protect();
  const user = await getCurrentUser();

  return (
    <div className="w-full bg-[#FCFBF3]">
      <div className="md:max-w-6xl mx-auto w-[90%] py-10">
        <BannerProfile user={user as User & { major: UserMajor }} />

        <ProfileSection />
      </div>
    </div>
  );
};

export default ProfilePage;

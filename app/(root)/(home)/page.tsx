import ExploreSection from "@/components/explore-section";
import HeroBanner from "@/components/hero-banner";
import React from "react";
import axios from "axios";
import ReviewHeroSection from "@/components/review-hero-section";
import HowItWorksSection from "@/components/how-it-works";
import GetStartedSection from "@/components/get-started-section";
import useModalStore from "@/store/modalStore";
import { getAllUniversities } from "@/lib/university";
import { University } from "@prisma/client";
import { getCurrentUser } from "@/lib/user";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export type UniversityRankingsData = {
  data: {
    rankings: {
      [key: string]: { id: string; location: string; name: string };
    };
  };
  sort_filter_by: any[]; // This array may contain additional sorting or filtering information
  status: string;
};

const HomePage = async () => {
  const universities = await getAllUniversities();

  return (
    <div className="w-full ">
      {/* Hero banner */}

      <HeroBanner universities={universities as University[]} />

      {/* Explore universities section */}
      <ExploreSection universities={universities as University[]} />

      {/* Review Hero Section */}
      <ReviewHeroSection />

      {/* How it works section */}
      <HowItWorksSection />

      {/* Get started section */}
      <GetStartedSection />
    </div>
  );
};

export default HomePage;

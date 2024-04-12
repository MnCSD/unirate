"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

const ProfileSection = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="mt-20 flex items-center justify-center gap-x-3">
      <button
        className={cn(
          "font-adlam text-xl",
          !active && "border-b border-black "
        )}
        onClick={() => setActive(!active)}
      >
        Reviews
      </button>
      <button
        className={cn("font-adlam text-xl", active && "border-b border-black ")}
        onClick={() => setActive(!active)}
      >
        Comments
      </button>
    </div>
  );
};

export default ProfileSection;

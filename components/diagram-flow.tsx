"use client";

import { User, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React, { useState, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { University } from "@prisma/client";
import { Majors } from "@/types";
import { useUser } from "@clerk/nextjs";
import { createUserMajor } from "@/actions/user-major";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

type DiagramFlowProps = {
  universities: University[];
  majors: any;
};

const DiagramFlow = ({ universities, majors }: DiagramFlowProps) => {
  const { user } = useUser();
  const [valueUniversity, setValueUniversity] = useState("");
  const [valueMajor, setValueMajor] = useState("");
  const [pending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  if (!user) return;

  const handleClick = () => {
    startTransition(() => {
      createUserMajor(valueMajor, valueUniversity)
        .then(() => {
          toast({
            title: `Major ${valueMajor} at ${valueUniversity} has been set.`,
          });

          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="flex items-center justify-center flex-col gap-y-4">
      <div className="flex flex-col items-center">
        <img
          src={user.imageUrl}
          alt="Profile"
          className="rounded-full border-2 border-violet-500 object-cover w-[100px] h-[100px]"
        />

        <span className="text-lg font-adlam">{user.username}</span>
      </div>

      <div className="h-[60px] w-[2px] bg-violet-500 rounded-full" />

      <div className="w-full">
        <Select
          onValueChange={(value) => {
            setValueUniversity(value);
          }}
        >
          <SelectTrigger className="w-[400px]">
            <SelectValue placeholder="Pick your university" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>University</SelectLabel>
              {universities.map((university) => (
                <SelectItem
                  key={university.id}
                  value={university.name}
                  className="cursor-pointer"
                >
                  {university.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {valueUniversity && (
        <div className="h-[200px] w-[2px] bg-violet-500 rounded-full animate-height_opacity-up" />
      )}

      {valueUniversity && (
        <div className="w-full animate-position_opacity-down ">
          <Select
            onValueChange={(value) => {
              setValueMajor(value);
            }}
          >
            <SelectTrigger className="w-[400px]">
              <SelectValue placeholder="Pick your major" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Majors</SelectLabel>
                {!valueUniversity ? (
                  <>
                    {Object.entries(majors).map(([university, departments]) => (
                      <div key={university}>
                        {/* @ts-ignore */}
                        {departments.map((department) => (
                          <SelectItem value={department} className="w-[400px]">
                            {department}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {Object.values(majors[valueUniversity]).map(
                      (department) => (
                        <SelectItem
                          // @ts-ignore
                          key={department}
                          // @ts-ignore
                          value={department}
                          className="w-[400px] cursor-pointer"
                        >
                          {/* @ts-ignore */}
                          {department}
                        </SelectItem>
                      )
                    )}
                  </>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      {valueMajor && (
        <button
          onClick={handleClick}
          className="bg-violet-700/35 px-6 py-2 rounded-full font-adlam text-[#471AA0] animate-opacity_opacity-up mt-10"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default DiagramFlow;

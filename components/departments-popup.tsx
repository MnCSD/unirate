"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import usePopupDepartments from "@/store/departments-popup-store";
import { X } from "lucide-react";

const DepartmentsPopup = ({ departments }: { departments: string[] }) => {
  const { isOpenDepartments, setShowDepartmentsPopup } = usePopupDepartments();

  return (
    <Dialog open={isOpenDepartments}>
      <DialogContent className="h-[90vh] scrollbar-hide overflow-y-scroll pt-0 px-0">
        <div className="sticky top-0 w-full h-[80px] z-[1000000] bg-[#FCFBF3] px-4 pt-0 flex items-center justify-between">
          <h1 className="text-2xl font-adlam">Departments</h1>

          <X
            className="h-7 w-7 text-black cursor-pointer"
            onClick={() => setShowDepartmentsPopup(!isOpenDepartments)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-4 ">
          {departments?.map((department, idx) => (
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
      </DialogContent>
    </Dialog>
  );
};

export default DepartmentsPopup;

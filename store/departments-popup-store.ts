import { create } from "zustand";

type ModalType = {
  isOpenDepartments: boolean;
  setShowDepartmentsPopup: (value: boolean) => void;
};

const usePopupDepartments = create<ModalType>((set) => ({
  isOpenDepartments: false,
  setShowDepartmentsPopup: (value) => set({ isOpenDepartments: value }),
}));

export default usePopupDepartments;

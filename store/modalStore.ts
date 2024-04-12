import { create } from "zustand";

type ModalType = {
  isOpen: boolean;
  setShowModal: (value: boolean) => void;
};

const useModalStore = create<ModalType>((set) => ({
  isOpen: false,
  setShowModal: (value) => set({ isOpen: value }),
}));

export default useModalStore;

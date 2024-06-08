import { create } from "zustand";

interface DataI {
  data: string[];
  setData: (data: any[]) => void;
}

export const useData = create<DataI>((set) => ({
  data: [],
  setData: (dataOne) => {
    if (dataOne) {
      set((state) => ({data : dataOne}));
    }
  },
}));

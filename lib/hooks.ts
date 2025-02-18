import { create } from "zustand";

export type StoreType = {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
};
export const useStore = create<StoreType>((set) => ({
  sidebar: true,
  setSidebar: (value: boolean) => set(() => ({ sidebar: value })),
}));

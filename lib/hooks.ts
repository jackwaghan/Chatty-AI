import { StoreType } from "@/Types/type";
import React from "react";
import { create } from "zustand";

export const useStore = create<StoreType>((set) => ({
  sidebar: false,
  setSidebar: (value: boolean) => set(() => ({ sidebar: value })),
  loading: false,
  setLoading: (value: boolean) => set(() => ({ loading: value })),
}));

export const usePathname = () => {
  const [pathname, setPathname] = React.useState("");
  React.useEffect(() => {
    const handleResize = () => {
      setPathname(window.location.pathname);
      window.addEventListener("popstate", () => {
        setPathname(window.location.pathname);
      });
    };
    handleResize();
    return () => {
      window.removeEventListener("popstate", handleResize);
    };
  }, []);
  return pathname;
};

export const useDevice = () => {
  const [device, setDevice] = React.useState<"mobile" | "desktop">("desktop");
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice("mobile");
      } else {
        setDevice("desktop");
      }
      window.addEventListener("resize", handleResize);
    };
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return device;
};

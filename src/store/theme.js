import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light"
    })),

  setTheme: (mode) => set({ theme: mode }),
}));

export default useThemeStore;

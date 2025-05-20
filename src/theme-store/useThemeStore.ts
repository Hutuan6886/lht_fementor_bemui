import { create } from "zustand";
import type { ThemeType } from "../../type";

interface ThemeStore {
  theme: ThemeType;
  toggleTheme: () => void;
}
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

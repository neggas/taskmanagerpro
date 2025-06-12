import { createContext, useContext, useState } from "react";

export type ThemeType = "material" | "shadcn";

export interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("material");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };

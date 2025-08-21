import React, { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../models/Theme.model";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

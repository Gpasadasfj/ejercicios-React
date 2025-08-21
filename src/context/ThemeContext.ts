import { createContext } from "react";
import { type ThemeContextType } from "../models/Theme.model";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


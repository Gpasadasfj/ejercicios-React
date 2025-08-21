export type Theme = "light" | "dark";

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: "light" | "dark") => void;
}
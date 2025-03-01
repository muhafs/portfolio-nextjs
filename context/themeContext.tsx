"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProviderProps) {
    const [theme, useTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            useTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            useTheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            useTheme(localTheme);

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            useTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const ctx = useContext(ThemeContext);

    if (ctx === null) {
        throw Error(
            "useThemeContext must be used within an ThemeContextProvider",
        );
    }

    return ctx;
}

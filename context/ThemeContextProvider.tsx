"use client";
import React, { useEffect, useState, createContext, useContext } from "react";

type themetype = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: themetype;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<themetype>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  //IMP
  // useEffect hm is liye use kr rhe hai taki ho var hmne local storage me store krvaya hai use hum re use kr ske agar user page ko refresh kr leta hai to ab user ne theme change kr diya and page referesh kr diya page referesh hone k baad browser behaviour k acc. sb kuch phle jaisa ho jyga but hme ye nahi chahiye hme to jo state usne set kri vo hi chahiye to hm local storage se us set varriable ko use krege and theme ko use krege. ab useEffect jo hota vo hmara function ko page  load hone k baad chlata hai jaise hi page load ho local storage read ho and user k dwara set ki gyi theme aa jaye

  useEffect(() => {
    // yha hmne read kr liya local storage se variable and uske types bhi set kr diye humne
    const localTheme = window.localStorage.getItem("theme") as themetype | null;

    // yha ye dekha ki agar koi theme exist krti hai to hi use set kro other wise mt kro kuki aisa ho skta hai ki use click hi na re theme btn ko
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw Error("Theme custom hook error");
  }

  return context;
}

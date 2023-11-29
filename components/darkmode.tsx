"use client";
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
function Darkmode() {
  const [mounted, setmounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setmounted(true);
  }, []);
  if (!mounted) return null;
  const ctheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {ctheme === "dark" ? (
        <SunIcon
          className="h-10 w-12 cursor-pointer  text-yellow-700"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-10 w-12 cursor-pointer  text-gray-700"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default Darkmode;

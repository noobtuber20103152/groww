"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function useThemeHook() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
}

export default useThemeHook;

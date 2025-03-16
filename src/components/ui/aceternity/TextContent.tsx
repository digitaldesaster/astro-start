"use client";
import React, { useState, useEffect } from "react";
import { AnimatedTooltipPreview } from "./animated-tooltip-demo";

// Create a global event bus for theme changes
if (typeof window !== "undefined") {
  window.themeChangeEvent = window.themeChangeEvent || new EventTarget();
}

// Optimized theme-aware styling hook
const useThemeAwareStyle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to check theme and update state
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Initialize on mount
    updateTheme();

    // Listen for custom theme change events
    const handleThemeChange = () => {
      updateTheme();
    };

    if (typeof window !== "undefined") {
      window.themeChangeEvent.addEventListener(
        "themeChanged",
        handleThemeChange
      );
    }

    // We'll also keep the MutationObserver as a fallback
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.themeChangeEvent.removeEventListener(
          "themeChanged",
          handleThemeChange
        );
      }
    };
  }, []);

  return { isDarkMode };
};

export const TextContent = () => {
  const { isDarkMode } = useThemeAwareStyle();

  return (
    <>
      <h1
        style={{
          color: isDarkMode ? "#fff" : "#000",
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Aceternity UI Components
      </h1>
      <p
        style={{
          color: isDarkMode ? "#d1d5db" : "#4b5563",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        Beautiful UI components built with Framer Motion and Tailwind CSS
      </p>

      <AnimatedTooltipPreview />

      <h2
        style={{
          color: isDarkMode ? "#fff" : "#000",
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "-0.025em",
          marginTop: "4rem",
          "@media (min-width: 640px)": {
            fontSize: "3.75rem",
            lineHeight: "1",
          },
        }}
      >
        Welcome to Astro
      </h2>
      <p
        style={{
          color: isDarkMode ? "#d1d5db" : "#4b5563",
          marginTop: "1.5rem",
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          maxWidth: "65ch",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Get started building your Astro site with Shadcn UI components
      </p>
    </>
  );
};

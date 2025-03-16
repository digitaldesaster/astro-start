"use client";
import React from "react";
import { AnimatedTooltipPreview } from "./animated-tooltip-demo";

// Simplified TextContent component using Tailwind dark mode classes
export const TextContent = () => {
  return (
    <>
      <h1 className="text-[1.875rem] leading-9 font-bold text-center mb-4 text-black dark:text-white transition-colors duration-100">
        Aceternity UI Components
      </h1>
      <p className="text-center mb-16 text-neutral-600 dark:text-neutral-300 transition-colors duration-100">
        Beautiful UI components built with Framer Motion and Tailwind CSS
      </p>

      <AnimatedTooltipPreview />

      <h2 className="sm:text-6xl text-[2.25rem] leading-tight font-bold tracking-tight mt-16 text-black dark:text-white transition-colors duration-100">
        Welcome to Astro
      </h2>
      <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-prose mx-auto transition-colors duration-100">
        Get started building your Astro site with Shadcn UI components
      </p>
    </>
  );
};

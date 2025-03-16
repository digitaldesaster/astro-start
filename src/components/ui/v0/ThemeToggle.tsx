import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    // Simple toggle between light and dark
    const newTheme = theme === "light" ? "dark" : "light";

    // Update component state
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem("theme", newTheme);

    // Direct DOM manipulation - this is what actually changes the theme
    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove("light", "dark");
    // Add the new theme class
    document.documentElement.classList.add(newTheme);
  };

  return (
    <motion.div
      className="block rounded-xl overflow-visible group relative"
      style={{ perspective: "600px" }}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        variants={glowVariants}
        style={{
          background:
            "radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(202,138,4,0.06) 50%, rgba(161,98,7,0) 100%)",
          opacity: 0,
          borderRadius: "16px",
        }}
      />
      <motion.button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 transition-colors rounded-xl"
        variants={itemVariants}
        transition={sharedTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center bottom",
        }}
        aria-label="Toggle theme"
      >
        <span
          className={theme === "dark" ? "text-blue-300" : "text-yellow-500"}
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </span>
        <span className="hidden sm:inline">Theme</span>
      </motion.button>
      <motion.button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 transition-colors rounded-xl"
        variants={backVariants}
        transition={sharedTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          rotateX: 90,
        }}
        aria-label="Toggle theme"
      >
        <span
          className={theme === "dark" ? "text-blue-300" : "text-yellow-500"}
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </span>
        <span className="hidden sm:inline">Theme</span>
      </motion.button>
    </motion.div>
  );
}

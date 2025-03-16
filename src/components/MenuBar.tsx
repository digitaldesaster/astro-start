"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Settings, Bell, User, BookOpen, Brain } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  iconColor: string;
  gradient: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#",
    iconColor: "text-blue-500",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Prompts",
    href: "#",
    iconColor: "text-purple-500",
    gradient:
      "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    label: "Knowledge",
    href: "#",
    iconColor: "text-emerald-500",
    gradient:
      "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "Notifications",
    href: "#",
    iconColor: "text-orange-500",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Settings",
    href: "#",
    iconColor: "text-green-500",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Profile",
    href: "#",
    iconColor: "text-red-500",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
  },
];

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

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function MenuBar() {
  return (
    <motion.nav
      className="p-2 rounded-2xl bg-white dark:bg-slate-800/90 backdrop-blur-lg border border-gray-200/60 dark:border-white/10 shadow-md dark:shadow-lg relative overflow-hidden w-full max-w-4xl transition-colors duration-300"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-100/50 via-30% via-purple-100/50 via-60% via-red-100/50 via-90% dark:via-blue-400/10 dark:via-30% dark:via-purple-400/10 dark:via-60% dark:via-red-400/10 dark:via-90% to-transparent rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />
      <ul className="flex items-center justify-between relative z-10">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
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
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-xl"
                variants={itemVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
              >
                <span
                  className={`transition-colors duration-300 ${item.iconColor}`}
                >
                  {item.icon}
                </span>
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-xl"
                variants={backVariants}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  rotateX: 90,
                }}
              >
                <span
                  className={`transition-colors duration-300 ${item.iconColor}`}
                >
                  {item.icon}
                </span>
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}

        {/* Theme Toggle */}
        <motion.li className="relative">
          <ThemeToggle />
        </motion.li>
      </ul>
    </motion.nav>
  );
}

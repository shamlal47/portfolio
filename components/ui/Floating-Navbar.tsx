"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { navigationItem } from "@/data";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}        className={cn(
          "flex w-[90%] sm:w-[400px] fixed top-10 inset-x-0 mx-auto border-2 border-neutral-300 rounded-full bg-black/50 backdrop-blur-sm shadow-lg z-[5000] px-4 py-3 items-center justify-between",
          className
        )}
      >
        {navItems.map((navItem:navigationItem, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}            className={cn(
              "relative items-center flex justify-center w-full text-yellow-500 hover:text-yellow-300 transition-colors duration-200 px-4"
            )}
          >            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

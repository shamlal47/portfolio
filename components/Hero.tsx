import { cn } from "@/lib/utils";
import React from "react";
import Button from "./ui/Button";

function Hero() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
      
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-6xl">    
        <p className="mb-4 text-center">Hi, I&apos;m <span className="text-yellow-500">Shamlal</span></p>        <p className="text-[15px] lg:text-[20px] text-center mb-8">A Full Stack Developer with a passion for building web applications and
        exploring new technologies</p>
        <div className="flex justify-center">
          <Button>Let&apos;s Connect</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

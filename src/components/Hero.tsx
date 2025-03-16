import React from "react";
import { Button } from "@/components/ui/button";
import NumberFlowComponent from "./NumberFlow";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-theme(spacing.16))] relative">
      {/* Gradient decorations */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
        </div>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Build your next idea even faster
          </h1>
          <NumberFlowComponent value={4531} client:visible />
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Beautifully designed components built with Radix UI and Tailwind
            CSS.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            GitHub
          </Button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 bottom-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_bottom,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

interface NumberFlowProps {
  value?: number; // Optional value
  [key: `client:${string}`]: boolean; // Allow Astro client directives
}

export default function NumberFlowComponent({ value }: NumberFlowProps) {
  // Generate a random start number between 100-999
  const [count, setCount] = useState(Math.floor(Math.random() * 9000) + 100);
  // Track if initial animation has happened
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      // First render animation
      const timer = setTimeout(() => {
        // If value is provided, use it; otherwise, generate random end number
        const targetValue =
          value !== undefined ? value : Math.floor(Math.random() * 9000) + 1000;

        setCount(targetValue);
        setHasAnimated(true);
      }, 300);

      return () => clearTimeout(timer);
    } else if (value !== undefined) {
      // For subsequent value changes from outside
      setCount(value);
    }
  }, [value, hasAnimated]);

  const randomize = () => {
    setCount(Math.floor(Math.random() * 9000) + 1000);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Basic Counter</h3>
        <NumberFlow
          value={count}
          className="text-4xl font-bold"
          format={{ useGrouping: true }}
          transformTiming={{ duration: 1000, easing: "ease-out" }}
          spinTiming={{ duration: 1000, easing: "ease-in-out" }}
          opacityTiming={{ duration: 500, easing: "ease-out" }}
        />
      </div>
      <button
        onClick={randomize}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Random Number
      </button>
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "gradient";
  hoverEffect?: "glow" | "float" | "scale" | "subtle";
  children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  variant = "default",
  hoverEffect = "scale",
  ...props
}) => {
  const baseClasses = cn(
    "rounded-lg p-6 transition-all duration-300 ease-in-out",
    {
      // Variant styles
      "bg-card text-card-foreground border border-border": variant === "default",
      "shadow-lg bg-background": variant === "elevated",
      "bg-gradient-to-br from-primary/10 to-secondary/10": variant === "gradient",
    }
  );

  const hoverVariants = {
    glow: {
      boxShadow: "0 0 20px rgba(0, 112, 243, 0.3)",
      scale: 1.02,
      transition: { duration: 0.3 },
    },
    float: {
      y: -10,
      transition: { duration: 0.3 },
    },
    scale: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    subtle: {
      scale: 1.02,
      opacity: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      whileHover={hoverEffect ? hoverVariants[hoverEffect] : undefined}
      className={cn(
        baseClasses,
        {
          "hover:shadow-glow": hoverEffect === "glow",
        },
        className
      )}
      {...(props as MotionProps & React.HTMLAttributes<HTMLDivElement>)} // Explicitly cast props
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;

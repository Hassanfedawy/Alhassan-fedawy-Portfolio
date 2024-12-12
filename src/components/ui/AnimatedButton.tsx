import React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  animationType?: "pulse" | "float" | "scale";
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  animationType = "scale",
  ...props
}) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      // Variant styles
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/90": variant === "secondary",
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
      "hover:bg-accent hover:text-accent-foreground": variant === "ghost",

      // Size styles
      "h-8 px-2 text-xs": size === "sm",
      "h-10 px-4 text-sm": size === "md",
      "h-12 px-6 text-base": size === "lg",
    }
  );

  const animationVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.5, repeat: Infinity },
    },
    float: {
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
    scale: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="inline-block"
      animate={animationType ? animationVariants[animationType] : undefined}
      whileHover={animationType ? animationVariants[animationType] : undefined}
      whileTap={{ scale: 0.95 }}
      {...(props as MotionProps & React.HTMLAttributes<HTMLDivElement>)} // Ensures compatibility
    >
      <button
        className={cn(baseClasses, className)}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default AnimatedButton;

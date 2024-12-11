import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = 'top',
  className
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionClasses = {
    top: "-translate-y-full top-0 left-1/2 -translate-x-1/2",
    bottom: "translate-y-full bottom-0 left-1/2 -translate-x-1/2",
    left: "-translate-x-full left-0 top-1/2 -translate-y-1/2",
    right: "translate-x-full right-0 top-1/2 -translate-y-1/2"
  };

  return (
    <div 
      className="relative inline-block group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 px-3 py-1.5 text-xs",
              "bg-foreground text-background",
              "rounded-md shadow-lg",
              "pointer-events-none",
              positionClasses[position],
              className
            )}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;

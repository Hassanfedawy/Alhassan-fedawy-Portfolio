import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

// Custom type to merge form and motion props
type MotionFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> &
  MotionProps & {
    children?: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  };

export const MotionForm = forwardRef<HTMLFormElement, MotionFormProps>(
  ({ children, onSubmit, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(e);
    };

    return (
      <motion.div>
        <form ref={ref} onSubmit={handleSubmit} {...props}>
          {children}
        </form>
      </motion.div>
    );
  }
);

MotionForm.displayName = 'MotionForm';

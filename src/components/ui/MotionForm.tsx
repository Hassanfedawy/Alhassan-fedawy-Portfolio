import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

// Custom type to merge form and motion props
type MotionFormProps = Omit<
  React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  keyof MotionProps
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
      <motion.form ref={ref} onSubmit={handleSubmit} {...props}>
        {children}
      </motion.form>
    );
  }
);

MotionForm.displayName = 'MotionForm';

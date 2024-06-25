"use client";

import { useRef, FC, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: ReactNode;
};

export const AnimatedOnScroll: FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

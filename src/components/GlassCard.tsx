import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(({ children, className = "", delay = 0 }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
});

GlassCard.displayName = "GlassCard";

export default GlassCard;

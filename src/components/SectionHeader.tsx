import { motion } from "framer-motion";
import { forwardRef } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(({ badge, title, subtitle }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
});

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;

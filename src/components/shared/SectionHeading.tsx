import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

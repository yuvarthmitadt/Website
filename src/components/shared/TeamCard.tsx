import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  description?: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
  };
  variant?: "default" | "circular" | "founder";
  delay?: number;
}

export function TeamCard({
  name,
  position,
  image,
  description,
  email,
  socialLinks,
  variant = "default",
  delay = 0,
}: TeamCardProps) {
  if (variant === "circular") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center group"
      >
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden gold-border p-0.5 transition-all duration-300 group-hover:shadow-gold-glow">
          <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        <h4 className="font-heading text-sm md:text-base font-semibold text-card-foreground mt-3 text-center">
          {name}
        </h4>
        <p className="text-xs text-muted-foreground text-center">{position}</p>
      </motion.div>
    );
  }

  if (variant === "founder") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-gradient-card rounded-2xl p-8 gold-border card-hover text-center"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden gold-border p-1 mb-6">
          <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <h3 className="font-heading text-2xl font-bold text-card-foreground mb-2">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        {description && (
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
        )}
        {(email || socialLinks) && (
          <div className="flex items-center justify-center gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            )}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-card rounded-xl p-6 gold-border card-hover text-center group"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden gold-border p-0.5 mb-4 transition-all duration-300 group-hover:shadow-gold-glow">
        <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <h4 className="font-heading text-lg font-semibold text-card-foreground mb-1">{name}</h4>
      <p className="text-sm text-primary">{position}</p>
      {description && (
        <p className="text-muted-foreground text-xs mt-2">{description}</p>
      )}
    </motion.div>
  );
}

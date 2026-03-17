import { motion } from "framer-motion";
import { speakers } from "@/data/mockData";

export function SpeakersSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Inspirational Speakers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from industry leaders and successful entrepreneurs
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {speakers.slice(0, 3).map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden gold-border p-1 transition-all duration-500 group-hover:shadow-gold-glow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary-foreground">
                    {speaker.designation}
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground text-center">
                {speaker.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center">{speaker.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeamCard } from "@/components/shared/TeamCard";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/mockData";

const AboutWeb = () => {
  const webLeads = teamMembers.tech.slice(0, 3);
  const techMembers = teamMembers.tech.slice(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16" 
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Meet the minds{" "}
              <span className="text-gradient-gold">BEHIND the Website</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The creative and technical team that brought this digital experience to life
            </p>
          </motion.div>

          {/* Web Leads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webLeads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-card rounded-2xl p-8 gold-border card-hover text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden gold-border p-1 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                    <img 
                      src={lead.image} 
                      alt={lead.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                  {lead.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{lead.position}</p>
                {lead.description && (
                  <p className="text-muted-foreground text-sm mb-6">{lead.description}</p>
                )}
                {lead.email && (
                  <a href={`mailto:${lead.email}`}>
                    <Button variant="goldOutline" size="lg">
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </Button>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="TECH MEMBERS OF YUVARTH" 
            subtitle="The developers, designers, and innovators"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="py-16 bg-card">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            Built with{" "}
            <Heart className="inline w-6 h-6 text-primary fill-primary" />{" "}
            by the tech team of{" "}
            <span className="text-gradient-gold font-heading font-bold">Yuvarth</span>
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default AboutWeb;

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Linkedin, Instagram, Users, TrendingUp, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeamCard } from "@/components/shared/TeamCard";
import { teamMembers } from "@/data/mockData";
import { companyConfig } from "@/config/company";

const objectives = [
  "Build a vibrant entrepreneurship ecosystem on campus",
  "Help students turn ideas into practical business ventures",
  "Provide real startup exposure through founders and experts",
  "Organize high-impact events, workshops, and activities",
  "Offer mentorship and resources to boost student confidence",
  "Cultivate innovation, leadership, and problem-solving mindsets",
];


const About = () => {
  return (
    <Layout>
      {/* Vision Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
                  Our Vision
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
               Our vision is to build a vibrant student-led entrepreneurship ecosystem that inspires innovation, 
               nurtures ideas, and empowers aspiring founders. Yuvarth aims to be a hub for collaboration,
                creativity, and growth, shaping entrepreneurs and ventures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to equip students with the mindset, skills, 
                and opportunities to explore entrepreneurship confidently. 
                Through expert guidance, real founder insights, hands-on learning, mentorship, 
                and impactful events, 
                Yuvarth prepares future-ready leaders who turn ideas into meaningful ventures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Objectives" 
            subtitle="What drives us forward every day"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-card rounded-xl gold-border"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-card-foreground">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach Section */}
      
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Reach" subtitle="Growing stronger every day" />
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-primary" />
                <span className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold">
                  50
                </span>
              </div>
              <p className="text-muted-foreground text-lg">Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold">
                  1000+
                </span>
              </div>
              <p className="text-muted-foreground text-lg">Total Reach</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <a 
                href={companyConfig.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-8 h-8 text-primary" />
              </a>
              <a 
                href={"https://www.instagram.com/yuvarth.mitadt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-8 h-8 text-primary" />
              </a>
              {/* WhatsApp */}
  <a
    href="https://chat.whatsapp.com/IJxocKfqQF2AMS4Hj5gCIK"
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-8 h-8 text-primary" />
  </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet Our Founders" 
            subtitle="The visionaries behind Yuvarth"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.founders.map((founder, index) => (
              <TeamCard
                key={founder.id}
                variant="founder"
                name={founder.name}
                position={founder.position}
                image={founder.image}
                description={founder.description}
                email={founder.email}
                socialLinks={founder.socialLinks}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-30 bg-card">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Core Team" 
            subtitle="The backbone of our operations"
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {teamMembers.core.map((member, index) => (
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

      {/* Promotion Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Promotion Team" 
            subtitle="Spreading the word, building the brand"
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {teamMembers.promotion.map((member, index) => (
              <TeamCard
                key={member.id}
                variant="circular"
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))} 
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 italic"
          >
            "Done for the cool team" ✨
          </motion.p>
        </div>
      </section>

      {/* Design Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Design Team" 
            subtitle="Crafting visual experiences that inspire"
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {teamMembers.Design.map((member, index) => (
              <TeamCard
                key={member.id}
                variant="circular"
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))} 
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Management Team" 
            subtitle="Orchestrating operations with precision"
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {teamMembers.Management.map((member, index) => (
              <TeamCard
                key={member.id}
                variant="circular"
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))} 
          </div>
        </div>
      </section>

      {/* Social Media Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Social Media Team" 
            subtitle="Connecting communities, amplifying voices"
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {teamMembers.SocialMedia.map((member, index) => (
              <TeamCard
                key={member.id}
                variant="circular"
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))} 
          </div>
        </div>
      </section>

      {/* Documentation Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Documentation Team" 
            subtitle="Capturing stories, preserving knowledge"
          />
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {teamMembers.Documentation.map((member, index) => (
              <TeamCard
                key={member.id}
                variant="circular"
                name={member.name}
                position={member.position}
                image={member.image}
                delay={index * 0.1}
              />
            ))} 
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 italic"
          >
            "Together we build, together we grow" ✨
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
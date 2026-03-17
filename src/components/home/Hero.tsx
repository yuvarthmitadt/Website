import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { companyConfig } from "@/config/company";
import logo from "@/assets/logo.png";

export function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % companyConfig.quotes.length);
    }, 5000);

    const announcementInterval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % companyConfig.announcements.length);
    }, 4000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(announcementInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-gold" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      {/* Announcement Banner */}
      {/*
      <div className="absolute top-0 left-0 right-0 bg-primary/10 border-b border-primary/20 py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnnouncement}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center text-sm md:text-base text-primary font-medium"
            >
              {companyConfig.announcements[currentAnnouncement]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    */}
      <div className="container mx-auto px-4 pt-16 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt={companyConfig.companyName}
            className="w-32 h-32 md:w-40 md:h-40 mx-auto animate-float"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient-gold">{companyConfig.companyName}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          {companyConfig.tagline}
        </motion.p>

        {/* Dynamic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-24 mb-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-lg md:text-xl italic text-card-foreground max-w-3xl mx-auto px-4"
            >
              "{companyConfig.quotes[currentQuote]}"
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/events">
            <Button variant="gold" size="xl" className="group">
              Register for Upcoming Event
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Quote Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() =>
              setCurrentQuote((prev) => (prev - 1 + companyConfig.quotes.length) % companyConfig.quotes.length)
            }
            className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex gap-2">
            {companyConfig.quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? "bg-primary w-6" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentQuote((prev) => (prev + 1) % companyConfig.quotes.length)}
            className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

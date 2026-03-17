import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  maxParticipants: number;
  registeredCount: number;
  registrationOpen: boolean;
  banner: string;
  onRegister: (id: string) => void;
  delay?: number;
}

export function EventCard({
  id,
  title,
  description,
  date,
  time,
  venue,
  maxParticipants,
  registeredCount,
  registrationOpen,
  banner,
  onRegister,
  delay = 0,
}: EventCardProps) {
  const spotsLeft = maxParticipants - registeredCount;
  const isFull = spotsLeft <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-card rounded-xl overflow-hidden gold-border card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={banner}
          alt={title}
          className="w-full h-full object-cover"
        />
        {registrationOpen && !isFull && (
          <div className="absolute top-4 right-4 bg-green-500/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Registrations Open
          </div>
        )}
        {isFull && (
          <div className="absolute top-4 right-4 bg-destructive/90 text-destructive-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Fully Booked
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{new Date(date).toLocaleDateString("en-US", { 
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{spotsLeft > 0 ? `${spotsLeft} spots left` : "No spots left"}</span>
          </div>
        </div>

        <Button
          variant={registrationOpen && !isFull ? "gold" : "outline"}
          className="w-full"
          disabled={!registrationOpen || isFull}
          onClick={() => onRegister(id)}
        >
          {isFull ? "Fully Booked" : registrationOpen ? "Register Now" : "Registration Closed"}
        </Button>
      </div>
    </motion.div>
  );
}

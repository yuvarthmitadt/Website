import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Image, ArrowRight, Quote, Lock, Mail, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { RegistrationModal } from "@/components/events/RegistrationModal";
import { Button } from "@/components/ui/button";
import { events } from "@/data/mockData";


const eventPhotos = [
  "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Images/_.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9JbWFnZXMvXy5qcGVnIiwiaWF0IjoxNzczNDUyMzIzLCJleHAiOjE4MDQ5ODgzMjN9.ezJhbecfYo-bhx_4pAhHnZkTjlGt5o0I9Sdav85Gvyc",


  "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Images/WhatsApp%20Image%202026-01-31%20at%2015.24.47.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9JbWFnZXMvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMS0zMSBhdCAxNS4yNC40Ny5qcGVnIiwiaWF0IjoxNzczNDUyNDk1LCJleHAiOjE4MDQ5ODg0OTV9.oExFk_U8uQbFDwi3CG3Vd8U72Fl49kdrzeFKC_uV6fM",


  "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Images/WhatsApp%20Image%202026-01-31%20at%2015.24.48.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9JbWFnZXMvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMS0zMSBhdCAxNS4yNC40OC5qcGVnIiwiaWF0IjoxNzczNDUyNTA5LCJleHAiOjE4MDQ5ODg1MDl9.RWmzS395cyovU_rCoitQqIa6M2M0tbQcdnwX9rNw2gQ",


  


  "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Images/WhatsApp%20Image%202026-01-31%20at%2015.24.48_1.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9JbWFnZXMvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMS0zMSBhdCAxNS4yNC40OF8xLmpwZWciLCJpYXQiOjE3NzM0NTI1MTYsImV4cCI6MTgwNDk4ODUxNn0.b4E_-9ctS0CsTVAvlTtos1TmT5pzUwDj8ZybdIDeQPk",


  "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Images/WhatsApp%20Image%202026-01-31%20at%2015.24.49.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9JbWFnZXMvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMS0zMSBhdCAxNS4yNC40OS5qcGVnIiwiaWF0IjoxNzczNDUyNTI4LCJleHAiOjE4MDQ5ODg1Mjh9.WrHZML8IKfluhKju_3zQUONinVT6qvYn6nwTq5byk5Q",
];

const eventVideos = [
  { 
    id: "1", 
    url: "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Videos/VID_20260113_000602_955.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9WaWRlb3MvVklEXzIwMjYwMTEzXzAwMDYwMl85NTUubXA0IiwiaWF0IjoxNzY4Mjk2MTAxLCJleHAiOjE5MjU5NzYxMDF9.N2Oqmr66VOdc4oyCaqdkWbWMYoJCb676JU_pQMGKovI", 
    title: "Business Summit Highlights" 
  },
  { 
    id: "2", 
    url: "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Videos/VID_20260113_000616_589.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9WaWRlb3MvVklEXzIwMjYwMTEzXzAwMDYxNl81ODkubXA0IiwiaWF0IjoxNzY4Mjk2MTQ5LCJleHAiOjE5MjU5NzYxNDl9.2hIW7hd3nhO6QxDCrrlO11O_zqtkrklvmMyeEqg11cA", 
    title: "Recap" 
  },
  { 
    id: "3", 
    url: "https://hbvkhxknurlfjjpedsgw.supabase.co/storage/v1/object/sign/Event_Videos/VID_20260113_000625_589.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYzQ5Mjc0YS05MzFhLTQ0NjMtODJkYS1lOWM4MmRjN2I5YzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJFdmVudF9WaWRlb3MvVklEXzIwMjYwMTEzXzAwMDYyNV81ODkubXA0IiwiaWF0IjoxNzY4Mjk2MTk4LCJleHAiOjE5MjU5NzYxOTh9.sGQxhAFPC8OWfKCJwD4kTV5DkLQ2100YaCh4bDT234w", 
    title: "Event" 
  },
];

const guestQuotes = [
  {
    name: "Kiran shinde",
    quote: "Yuvarth represents study of future innovation in business. The enthusiasm of these young minds is truly inspiring.",
    event: "We pitch",
  },
  {
    name: "Anand Nahar",
    quote: "It was a privilege to share my experiences with such a motivated group. Keep pushing boundaries!",
    event: "Innovation Workshop",
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedEventTitle, setSelectedEventTitle] = useState("");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const completedEvents = events.filter((e) => e.status === "completed");

  const handleRegister = (eventId: string) => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      setSelectedEvent(eventId);
      setSelectedEventTitle(event.title);
    }
  };

  return (
    <Layout>
      {/* Event Registration Section - Closed State */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="EVENT REGISTRATION" 
            subtitle="Join our upcoming events and be part of something amazing"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-16 border border-muted-foreground/20 flex flex-col items-center justify-center text-center backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-muted-foreground/20 flex items-center justify-center mx-auto">
                  <Lock className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
                </div>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                Registrations Currently Closed
              </h3>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                We're not accepting event registrations at the moment. Stay tuned for exciting new events coming soon!
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4" />
                  Notify Me When Events Open
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Photos Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Event Photos" 
            subtitle="Capturing moments of learning and networking"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {eventPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden gold-border group cursor-pointer"
              >
                <img 
                  src={photo} 
                  alt={`Event photo ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Image className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button variant="outline" className="group">
              View More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Event Videos Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Event Videos" 
            subtitle="Relive the best moments from our events"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eventVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative aspect-video rounded-xl overflow-hidden gold-border group"
              >
                <video 
                  src={video.url}
                  className="w-full h-full object-cover"
                  controls={playingVideo === video.id}
                  onClick={() => setPlayingVideo(video.id)}
                />
                {playingVideo !== video.id && (
                  <div 
                    className="absolute inset-0 bg-background/60 flex items-center justify-center group-hover:bg-background/40 transition-colors cursor-pointer"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent pointer-events-none">
                  <h4 className="font-heading text-lg font-semibold text-card-foreground">
                    {video.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button variant="outline" className="group">
              View More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Celebrating with Guests Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Celebrating with Guests" 
            subtitle="Words of wisdom from our distinguished guests"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guestQuotes.map((guest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-card rounded-2xl p-8 gold-border relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                <p className="text-card-foreground text-lg italic mb-6 leading-relaxed">
                  "{guest.quote}"
                </p>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary">
                    {guest.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{guest.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        eventTitle={selectedEventTitle}
        eventId={selectedEvent || ""}
      />
    </Layout>
  );
};

export default Events;
export const companyConfig = {
  companyName: "Yuvarth",
  tagline: "Empowering Future Business Leaders",
  description: "A premier business club dedicated to fostering entrepreneurship, innovation, and leadership among young minds.",
  
  theme: {
    primary: "#D4AF37",
    secondary: "#000000",
    accent: "#B8962E",
  },

  stats: {
    members: 1440,
    reach: 4668,
  },

  contact: {
    email: "contact@yuvarth.com",
    phone: "+91 98765 43210",
    address: "Business Hub, Innovation Center",
  },

  socialMedia: {
    instagram: "https://instagram.com/yuvarth",
    linkedin: "https://linkedin.com/company/yuvarth",
    facebook: "https://facebook.com/yuvarth",
    
  },

  quotes: [
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Your network is your net worth.",
    "Great things in business are never done by one person. They're done by a team of people.",
  ],

  announcements: [
    "🎯 New batch registrations open for Business Fundamentals course!",
    "🏆 Congratulations to our members for winning the National B-Plan Competition!",
    "📢 Guest lecture by industry leaders this weekend - Register now!",
    "💡 Innovation Summit 2024 - Coming soon!",
  ],
};

export type CompanyConfig = typeof companyConfig;

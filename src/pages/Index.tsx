import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { NewsSection } from "@/components/home/NewsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { companyConfig } from "@/config/company";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SpeakersSection />
      <NewsSection />
      <InsightsSection />
    </Layout>
  );
};

export default Index;

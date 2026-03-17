import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, Loader } from "lucide-react";

export function InsightsSection() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dev.to/api/articles?tag=startup&per_page=6"
        );
        const data = await response.json();

        // Transform Dev.to API data to match your format
        const transformedData = data.map((article) => ({
          id: article.id,
          title: article.title,
          content: article.description,
          category: "Startup",
          author: article.user?.name || "Dev.to",
          readTime: `${article.reading_time_minutes || 5} min`,
          url: article.url,
        }));

        setInsights(transformedData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching insights:", err);
        setError("Failed to load insights");
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

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
            <span className="text-gradient-gold">Business Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert analysis and trends to keep you ahead of the curve
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.a
                key={insight.id}
                href={insight.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-secondary/50 rounded-xl gold-border gold-border-hover card-hover cursor-pointer hover:no-underline"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {insight.content}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="line-clamp-1">{insight.author}</span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                    {insight.readTime}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
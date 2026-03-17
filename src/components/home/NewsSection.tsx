import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Eye, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { news as fallbackNews } from "@/data/mockData";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishDate: string;
  views: string | number;
  url?: string;
  slug?: string;
  content?: string;
  author?: string;
  featured?: boolean;
  tags?: string[];
}

export function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>(fallbackNews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      
      // Get API key from environment variable
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
      
      // Debug: Check if API key exists
      console.log("API Key exists:", !!API_KEY);
      console.log("API Key (first 10 chars):", API_KEY?.substring(0, 10));
      
      // If no API key, silently use fallback data
      if (!API_KEY) {
        console.warn("⚠️ NewsAPI key not found. Using fallback data.");
        console.warn("Make sure you have VITE_NEWS_API_KEY in your .env file");
        setNews(fallbackNews);
        setLoading(false);
        return;
      }
      
      console.log("🔄 Fetching live news from NewsAPI...");
      
      // Fetching business news from NewsAPI
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=6&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();

      // Transform API data to match your component structure
      const transformedNews: NewsArticle[] = data.articles
        .filter((article: any) => article.urlToImage) // Only articles with images
        .map((article: any, index: number) => ({
          id: `news-${Date.now()}-${index}`,
          title: article.title,
          excerpt: article.description || article.content?.substring(0, 150) || "Click to read more about this story...",
          image: article.urlToImage,
          category: article.source.name || "Business",
          publishDate: article.publishedAt,
          views: `${Math.floor(Math.random() * 5000) + 1000}`,
          url: article.url,
        }));

      if (transformedNews.length > 0) {
        console.log("✅ Successfully fetched", transformedNews.length, "news articles");
        setNews(transformedNews);
      } else {
        console.warn("⚠️ No articles returned from API, using fallback");
        setNews(fallbackNews);
      }
    } catch (err) {
      console.error("❌ Error fetching news:", err);
      console.error("Full error:", JSON.stringify(err));
      // Silently fall back to mock data if API fails
      setNews(fallbackNews);
    } finally {
      setLoading(false);
    }
  };

  const latestNews = news.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              <span className="text-gradient-gold">Top Business News</span>
            </h2>
            <p className="text-muted-foreground text-lg">Stay updated with the latest happenings</p>
          </div>
          <Link to="/news" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All News
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-card rounded-xl overflow-hidden gold-border gold-border-hover card-hover cursor-pointer"
                onClick={() => article.url && window.open(article.url, "_blank")}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {typeof article.views === 'number' ? article.views : article.views}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
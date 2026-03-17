import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Eye, ArrowRight, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { news as fallbackNews } from "@/data/mockData";

// const categories = ["All", "Achievement", "Partnership", "Event", "Startup", "Workshop", "Milestone"];

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

const News = () => {
  const [news, setNews] = useState<NewsArticle[]>(fallbackNews);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
      
      // Debug logs
      console.log("API Key exists:", !!API_KEY);
      
      if (!API_KEY) {
        console.warn("⚠️ NewsAPI key not found. Using fallback data.");
        setNews(fallbackNews);
        setLoading(false);
        return;
      }
      
      console.log("🔄 Fetching live news from NewsAPI...");
      
      // Fetch more articles for the full news page
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=50&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();

      const transformedNews: NewsArticle[] = data.articles
        .filter((article: any) => article.urlToImage)
        .map((article: any, index: number) => ({
          id: `news-${Date.now()}-${index}`,
          title: article.title,
          excerpt: article.description || article.content?.substring(0, 150) || "Click to read more about this story...",
          image: article.urlToImage,
          category: mapSourceToCategory(article.source.name),
          publishDate: article.publishedAt,
          views: Math.floor(Math.random() * 5000) + 1000,
          url: article.url,
          featured: index < 3, // First 3 articles are featured
          author: article.author || "Editorial Team",
          slug: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
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
      setNews(fallbackNews);
    } finally {
      setLoading(false);
    }
  };

  // Map news sources to your categories
  const mapSourceToCategory = (source: string): string => {
    const lowerSource = source.toLowerCase();
    if (lowerSource.includes('techcrunch') || lowerSource.includes('tech')) return 'Startup';
    if (lowerSource.includes('workshop') || lowerSource.includes('training')) return 'Workshop';
    if (lowerSource.includes('event')) return 'Event';
    if (lowerSource.includes('milestone')) return 'Milestone';
    if (lowerSource.includes('partnership')) return 'Partnership';
    return 'Achievement';
  };

  // const filteredNews = useMemo(() => {
  //   return news.filter((article) => {
  //     const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  //     const matchesCategory = activeCategory === "All" || article.category === activeCategory;
  //     return matchesSearch && matchesCategory;
  //   });
  // }, [searchQuery, activeCategory, news]);

  const filteredNews = useMemo(() => {
  return news.filter((article) => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [searchQuery, news]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout>
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient-gold">Latest News</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest happenings, achievements, and announcements
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 space-y-6"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-12 h-12 bg-secondary border-border"
              />
            </div>

            {/* Category Filters */}
            {/* <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </motion.div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          ) : (
            <>
              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group bg-gradient-card rounded-xl overflow-hidden gold-border gold-border-hover card-hover cursor-pointer"
                    onClick={() => article.url && window.open(article.url, "_blank")}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                      {article.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-gold text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {typeof article.views === 'number' ? article.views : article.views}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Empty State */}
              {paginatedNews.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-muted-foreground text-lg">No news articles found.</p>
                </motion.div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center items-center gap-2 mt-12"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                          currentPage === page
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-primary/10"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default News;
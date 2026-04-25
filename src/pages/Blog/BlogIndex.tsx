import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { blogPosts as staticBlogPosts } from "./blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteConfig } from "@/config/siteConfig";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost } from "./types";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

const BlogIndex = () => {
  const { t, i18n } = useTranslation();
  const config = getSiteConfig();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const currentLang = i18n.language || 'vi';
      
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("language", currentLang)
        .order("date", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
        // Filter static posts by language as fallback
        const filteredStatic = staticBlogPosts.filter(p => (p as any).language === currentLang || (! (p as any).language && currentLang === 'vi'));
        setPosts(filteredStatic as BlogPost[]);
      } else if (data && data.length > 0) {
        setPosts(data as BlogPost[]);
      } else {
        const filteredStatic = staticBlogPosts.filter(p => (p as any).language === currentLang || (! (p as any).language && currentLang === 'vi'));
        setPosts(filteredStatic as BlogPost[]);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{t("blog.meta_title")} | {config.name}</title>
        <meta name="description" content={t("blog.meta_description")} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24">
        <div className="container-section text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
              <Trans i18nKey="blog.title">
                Blog Kiến Thức <span className="text-primary italic">Logistics</span>
              </Trans>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("blog.subtitle", { name: config.name })}
            </p>
          </motion.div>
        </div>

        <div className="container-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div className="col-span-full py-24 text-center text-slate-400 font-bold">
                {t("blog.loading")}
              </div>
            ) : posts.length === 0 ? (
              <div className="col-span-full py-24 text-center text-slate-400 font-bold">
                {t("blog.no_posts")}
              </div>
            ) : posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col h-full"
              >
                <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-xs font-bold text-primary uppercase tracking-widest">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 line-clamp-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                      <User size={16} /> {post.author}
                    </div>
                     <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
                      {t("blog.read_more")} <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;

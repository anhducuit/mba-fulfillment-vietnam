import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag, Share2, Facebook, Linkedin } from "lucide-react";
import { blogPosts } from "./blogData";
import { blogPosts as staticBlogPosts } from "./blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { BlogPost as BlogPostType } from "./types";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const config = getSiteConfig();

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error || !data) {
        // Fallback to static
        const staticPost = staticBlogPosts.find(p => p.slug === slug);
        setPost(staticPost || null);
      } else {
        setPost(data as BlogPostType);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center font-bold text-slate-400 italic animate-pulse">
          Đang tải nội dung chuyên sâu...
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://omsmba.online${post.image}`,
    "author": {
      "@type": "Organization",
      "name": config.name
    },
    "publisher": {
      "@type": "Organization",
      "name": config.name,
      "logo": {
        "@type": "ImageObject",
        "url": `https://omsmba.online${config.logo}`
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | Blog {config.name}</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="pt-32 pb-24">
        <article className="container-section max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-medium">
            <ArrowLeft size={18} /> Quay lại Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6 text-sm font-bold text-primary uppercase tracking-widest">
              <span className="bg-primary/10 px-4 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar size={16} /> {post.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-slate-900">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-12 py-6 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <User size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{post.author}</div>
                  <div className="text-sm text-slate-500">Người viết bài</div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>

            <div className="aspect-video rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div 
              className="prose prose-slate prose-lg max-w-none 
              prose-headings:font-black prose-headings:text-slate-900
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-img:rounded-3xl shadow-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-100 cursor-pointer transition-colors">
                    <Tag size={14} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

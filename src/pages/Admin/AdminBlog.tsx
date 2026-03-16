import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Save, X, LayoutDashboard, FileText, Settings, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost } from "../Blog/types";

const slugify = (text: string) => {
  return text
    .toString()
    .normalize('NFD')                   // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '')   // remove all the accents
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')         // remove non-alphanumeric characters (except spaces and dashes)
    .replace(/[\s_-]+/g, '-')          // replace spaces, underscores, and multiple dashes with a single dash
    .replace(/^-+|-+$/g, '');          // remove leading and trailing dashes
};

const AdminBlog = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({});

  // Simple hardcoded password for CEO as requested
  const ADMIN_PASSWORD = "Anhduc123@";

  useEffect(() => {
    if (isLoggedIn) {
      fetchPosts();
    }
  }, [isLoggedIn]);

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      toast.error("Không thể tải danh sách bài viết");
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      toast.success("Chào mừng Sếp quay trở lại!");
    } else {
      toast.error("Mật khẩu không đúng");
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      ...currentPost,
      slug: currentPost.slug || slugify(currentPost.title || ""),
      date: new Date().toISOString().split("T")[0],
      author: currentPost.author || "MBA Fulfillment",
      tags: typeof currentPost.tags === 'string' 
        ? (currentPost.tags as string).split(',').map(tag => tag.trim()).filter(tag => tag !== "")
        : currentPost.tags || []
    };

    if (currentPost.id) {
      const { error } = await supabase
        .from("blog_posts")
        .update(postData)
        .eq("id", currentPost.id);
      
      if (error) toast.error("Cập nhật thất bại");
      else {
        toast.success("Cập nhật thành công");
        setIsEditing(false);
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from("blog_posts")
        .insert([postData]);

      if (error) toast.error("Đăng bài thất bại");
      else {
        toast.success("Đăng bài thành công!");
        setIsEditing(false);
        fetchPosts();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Anh có chắc muốn xóa bài này không?")) {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) toast.error("Xóa thất bại");
      else {
        toast.success("Đã xóa bài viết");
        fetchPosts();
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[2.5rem] shadow-2xl max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings size={32} />
            </div>
            <h1 className="text-3xl font-black text-slate-900">Admin Login</h1>
            <p className="text-slate-500 mt-2">Hệ thống quản trị nội dung MBA</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label>Mật khẩu quản trị</Label>
              <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu sếp ơi..."
                className="py-6 rounded-xl border-slate-200"
              />
            </div>
            <Button type="submit" className="w-full py-7 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-lg shadow-xl shadow-slate-200">
              Đăng nhập ngay
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-32 pb-24 container-section">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 flex items-center gap-4">
              <LayoutDashboard className="text-primary" size={40} />
              Quản trị Nội dung
            </h1>
            <p className="text-slate-500 mt-2">Nơi Sếp viết bài và quản lý Blog hệ thống</p>
          </div>
          <div className="flex gap-4">
            <Button 
                onClick={() => { setIsEditing(true); setCurrentPost({}); }}
                className="bg-primary hover:bg-primary/90 py-6 px-8 rounded-xl font-bold shadow-lg shadow-primary/20"
            >
              <Plus className="mr-2" size={20} /> Viết bài mới
            </Button>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)} className="py-6 px-6 rounded-xl border-slate-200">
              <LogOut size={20} />
            </Button>
          </div>
        </div>

        {isEditing ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900">
                {currentPost.id ? "Chỉnh sửa bài viết" : "Viết bài Blog chuẩn SEO"}
              </h2>
              <Button variant="ghost" onClick={() => setIsEditing(false)} className="text-slate-400">
                <X size={24} />
              </Button>
            </div>
            <form onSubmit={handleSave} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="font-bold">Tiêu đề bài viết</Label>
                    <Input 
                      value={currentPost.title || ""} 
                      onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                      placeholder="Vd: 5 Cách Tiết Kiệm Chi Phí Logistics"
                      className="py-6 rounded-xl border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Danh mục</Label>
                    <Input 
                      value={currentPost.category || ""} 
                      onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                      placeholder="Vd: Kiến thức Logistics"
                      className="py-6 rounded-xl border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Đường dẫn bài viết (Slug)</Label>
                    <Input 
                      value={currentPost.slug || (currentPost.title ? slugify(currentPost.title) : "")} 
                      onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                      placeholder="vd: gia-xang-dau-hom-nay"
                      className="py-6 rounded-xl border-slate-200 font-mono text-sm"
                    />
                    <p className="text-[10px] text-slate-400 italic">* Để trống để tự động tạo từ tiêu đề</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Ảnh đại diện (Link URL)</Label>
                    <Input 
                      value={currentPost.image || ""} 
                      onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                      className="py-6 rounded-xl border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold">Tags (Cách nhau bằng dấu phẩy)</Label>
                    <Input 
                      value={Array.isArray(currentPost.tags) ? currentPost.tags.join(', ') : currentPost.tags || ""} 
                      onChange={(e) => setCurrentPost({ ...currentPost, tags: e.target.value as any })}
                      placeholder="Vd: Logistics, Fulfillment, Xu hướng"
                      className="py-6 rounded-xl border-slate-200"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2 text-primary font-bold">
                    <Label className="font-bold">Mô tả ngắn (Excerpt)</Label>
                    <Textarea 
                      value={currentPost.excerpt || ""} 
                      onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                      className="min-h-[160px] rounded-xl border-slate-200"
                      placeholder="Nội dung sẽ hiển thị ở trang danh sách..."
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold">Nội dung bài viết (Hỗ trợ mã HTML)</Label>
                <Textarea 
                  value={currentPost.content || ""} 
                  onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                  className="min-h-[400px] rounded-xl border-slate-200 font-mono text-sm"
                  placeholder="<h2>Tiêu đề mục</h2> <p>Nội dung đoạn văn...</p>"
                />
              </div>
              <div className="flex justify-end gap-4 pt-8">
                <Button variant="outline" type="button" onClick={() => setIsEditing(false)} className="py-7 px-10 rounded-xl">
                  Hủy bỏ
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90 py-7 px-12 rounded-xl font-bold shadow-xl shadow-primary/20">
                  <Save className="mr-2" size={20} /> {currentPost.id ? "Cập nhật ngay" : "Đăng bài ngay"}
                </Button>
              </div>
            </form>
          </motion.div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-6 font-bold text-slate-400 uppercase text-xs tracking-widest">Tiêu đề - Ngày đăng</th>
                    <th className="p-6 font-bold text-slate-400 uppercase text-xs tracking-widest">Danh mục</th>
                    <th className="p-6 font-bold text-slate-400 uppercase text-xs tracking-widest text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {isLoading ? (
                    <tr><td colSpan={3} className="p-12 text-center text-slate-400">Đang tải dữ liệu...</td></tr>
                  ) : posts.length === 0 ? (
                    <tr><td colSpan={3} className="p-12 text-center text-slate-400">Chưa có bài viết nào. Hãy tạo bài đầu tiên Sếp nhé!</td></tr>
                  ) : posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-slate-900 group cursor-pointer" onClick={() => { setIsEditing(true); setCurrentPost(post); }}>
                          {post.title}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">{post.date}</div>
                      </td>
                      <td className="p-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            onClick={() => { setIsEditing(true); setCurrentPost(post); }}
                            className="bg-blue-50 text-blue-600 hover:bg-blue-100 h-10 w-10 p-0 rounded-lg"
                          >
                            <Edit2 size={18} />
                          </Button>
                          <Button 
                            variant="ghost" 
                            onClick={() => handleDelete(post.id)}
                            className="bg-red-50 text-red-600 hover:bg-red-100 h-10 w-10 p-0 rounded-lg"
                          >
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminBlog;

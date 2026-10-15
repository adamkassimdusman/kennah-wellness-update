import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Calendar, Search, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

const cardStagger: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#094454] text-white py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#75ADB2] uppercase tracking-[1px] text-[12px] font-[800] font-outfit mb-2 block"
          >
            Resources & Guides
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[27px] sm:text-[36px] lg:text-[46px] font-[900] font-outfit tracking-tight leading-[1.2] mb-4 text-white"
          >
            Senior & Family Care Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-2xl mx-auto text-teal-100/90 text-[15px] sm:text-[16px] leading-relaxed"
          >
            Expert insights, caregiver guides, and helpful tips for families navigating in-home elder care across the Pittsburgh region.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="max-w-md mx-auto mt-6"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white text-slate-900 rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-hidden shadow-lg border border-teal-200/30"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-4 top-4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              No articles found matching "{searchTerm}".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardStagger}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#094454]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-xs">
                      <Calendar className="w-3 h-3 text-[#75ADB2]" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[11px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-2">
                        {post.category}
                      </span>
                      <h2 className="text-[18px] sm:text-[20px] font-[800] text-[#094454] font-outfit group-hover:text-[#75ADB2] transition-colors leading-[1.3] mb-3">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-[14px] line-clamp-3 leading-[1.6]">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-[700] text-[#094454] group-hover:text-[#75ADB2] transition-colors">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        5 min read
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  Check,
  Copy,
  Phone,
  ShieldCheck,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  ChevronRight,
  User,
  Heart,
  Printer
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogData';
import { COMPANY_INFO } from '../data/siteData';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null);

  // Calculate read time based on word count (~200 wpm)
  const readTimeMinutes = useMemo(() => {
    const rawText = post.content ? post.content.replace(/<[^>]+>/g, ' ') : post.excerpt;
    const wordCount = rawText.trim().split(/\s+/).length;
    return Math.max(3, Math.ceil(wordCount / 190));
  }, [post.content, post.excerpt]);

  // Track scroll progress for reading bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean HTML from Elementor artifacts and inject heading IDs for Table of Contents
  const { cleanHtml, headings } = useMemo(() => {
    if (!post.content) {
      return { cleanHtml: '', headings: [] };
    }

    // Clean out messy Elementor spacers and tweet links
    let html = post.content
      .replace(/<div[^>]*class="[^"]*elementor-spacer[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
      .replace(/<div[^>]*class="[^"]*elementor-widget-spacer[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
      .replace(/<div[^>]*class="[^"]*e-q-footer[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '')
      .replace(/<a[^>]*href="https:\/\/twitter\.com\/intent\/tweet[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '')
      .replace(/<hr[^>]*>/gi, '<hr class="my-8 border-slate-200" />');

    // Extract H2 headings
    const rawHeadings = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
    const extracted = rawHeadings.map((m, idx) => ({
      id: `section-heading-${idx}`,
      title: m[1].replace(/<[^>]+>/g, '').trim()
    }));

    // Inject IDs into the H2 tags for smooth scrolling
    let headingIdx = 0;
    html = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, inner) => {
      const id = `section-heading-${headingIdx++}`;
      return `<h2 id="${id}" class="scroll-mt-28" ${attrs}>${inner}</h2>`;
    });

    return { cleanHtml: html, headings: extracted };
  }, [post.content]);

  // Determine previous and next articles
  const { prevPost, nextPost, relatedPosts } = useMemo(() => {
    const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
    const prev = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
    const next = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
    const others = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
    return { prevPost: prev, nextPost: next, relatedPosts: others };
  }, [post.id]);

  // Copy article link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Social share URLs
  const articleUrl = typeof window !== 'undefined' ? window.location.href : 'https://kenahwellness.com/blog';
  const shareTwitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(articleUrl)}`;
  const shareFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
  const shareLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
  const shareEmailUrl = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`I thought you might find this article from Kenah Wellness Services helpful: ${articleUrl}`)}`;

  // Smooth scroll to heading
  const scrollToHeading = (id: string) => {
    setActiveHeadingId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">
      {/* 1. Subtle Reading Progress Bar (Fixed on Top) */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#75ADB2] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 2. Editorial Header Banner */}
      <section className="bg-[#094454] text-white py-14 lg:py-20 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#75ADB2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-teal-200/80 mb-6 flex-wrap"
          >
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-teal-400/60" />
            <button
              onClick={() => onNavigate('/blog')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Blog
            </button>
            <ChevronRight className="w-3 h-3 text-teal-400/60" />
            <span className="text-teal-200 font-semibold">{post.category}</span>
          </motion.div>

          {/* Category Pill & Verification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            <span className="bg-[#75ADB2] text-slate-950 text-[11px] font-[800] uppercase tracking-[1px] px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-teal-100 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-[#75ADB2]" />
              {readTimeMinutes} min read
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-teal-100 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#75ADB2]" />
              Clinically Reviewed
            </span>
          </motion.div>

          {/* Article Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-[26px] sm:text-[38px] lg:text-[46px] font-[900] font-outfit tracking-tight leading-[1.2] mb-6 text-white max-w-4xl"
          >
            {post.title}
          </motion.h1>

          {/* Author Byline & Published Date Strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-teal-800/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#75ADB2] text-[#094454] flex items-center justify-center font-bold text-sm shadow-md">
                KW
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  Kenah Clinical Care Coordination Team
                </p>
                <p className="text-xs text-teal-200/80">
                  Serving Allison Park, PA & Greater Pittsburgh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-teal-100/90 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#75ADB2]" />
                Published {post.date}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-teal-200/80">Updated for 2025 Care Standards</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Main Content & Sidebar Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image Frame with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-16/9 lg:aspect-21/9 bg-slate-100 border border-slate-200 relative group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white/90 text-xs flex items-center justify-between">
                <span>Kenah Wellness Senior Care Guide • Allegheny County</span>
                <span className="hidden sm:inline text-white/70">Photo: Certified In-Home Caregiving</span>
              </div>
            </div>

            {/* Quick Share Bar directly under image */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-[#F4F6F0] rounded-2xl px-5 py-3 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Share2 className="w-4 h-4 text-[#75ADB2]" />
                <span>Share this resource:</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={shareTwitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 transition-colors"
                >
                  Twitter / X
                </a>
                <a
                  href={shareFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={shareLinkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 transition-colors"
                >
                  LinkedIn
                </a>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#094454] hover:bg-[#75ADB2] hover:text-black text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Two-Column Grid: Content (8) + Sticky Sidebar (4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: Main Article Body */}
            <div className="lg:col-span-8 space-y-8">
              {/* Executive Summary / Key Takeaways Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="bg-[#F4F6F0] rounded-3xl p-6 sm:p-8 border border-slate-200/90 relative overflow-hidden"
              >
                <div className="flex items-center gap-2.5 text-[#094454] font-[800] text-sm uppercase tracking-[1px] mb-3">
                  <Bookmark className="w-4 h-4 text-[#75ADB2]" />
                  <span>Key Takeaways for Families</span>
                </div>
                <h3 className="text-lg sm:text-xl font-[800] text-[#094454] font-outfit mb-3">
                  What You Need to Know at a Glance
                </h3>
                <ul className="space-y-2.5 text-[14px] sm:text-[15px] text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#75ADB2]/20 text-[#094454] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>
                      In-home care offers seniors the highest degree of dignity, emotional comfort, and autonomy within familiar surroundings.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#75ADB2]/20 text-[#094454] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>
                      Professional one-on-one attention significantly minimizes fall hazards, medication errors, and hospital readmissions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#75ADB2]/20 text-[#094454] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>
                      Flexible, customized schedules (part-time, 24/7 live-in, or respite) offer major cost savings over residential institutions.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Formatted Article Body */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-slate max-w-none text-slate-800 leading-[1.8] text-[16px] sm:text-[17px] space-y-6"
              >
                {cleanHtml ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: cleanHtml }}
                    className="space-y-6 [&>p]:leading-[1.8] [&>p]:text-slate-700 [&>h2]:text-[24px] [&>h2]:sm:text-[28px] [&>h2]:font-[800] [&>h2]:text-[#094454] [&>h2]:font-outfit [&>h2]:pt-6 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-slate-100 [&>h3]:text-[20px] [&>h3]:sm:text-[22px] [&>h3]:font-[800] [&>h3]:text-[#094454] [&>h3]:font-outfit [&>h3]:pt-4 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:space-y-2.5 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:text-slate-700 [&>blockquote]:border-l-4 [&>blockquote]:border-[#75ADB2] [&>blockquote]:bg-[#F4F6F0] [&>blockquote]:p-6 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-slate-800 [&>blockquote]:my-6 [&>strong]:text-[#094454] [&>strong]:font-[700]"
                  />
                ) : (
                  <p className="text-slate-700 leading-relaxed text-lg">{post.excerpt}</p>
                )}
              </motion.article>

              {/* Feedback Widget: "Was this helpful?" */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F4F6F0] rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-bold text-[#094454] text-sm">Was this guide helpful for your family?</h4>
                  <p className="text-xs text-slate-600">Your feedback helps our clinical care coordinators improve guides.</p>
                </div>
                {feedbackGiven ? (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full">
                    Thank you for your feedback!
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFeedbackGiven('yes')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#75ADB2] hover:text-black text-[#094454] font-semibold text-xs border border-slate-300 transition-colors cursor-pointer"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Yes, helpful</span>
                    </button>
                    <button
                      onClick={() => setFeedbackGiven('no')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-300 transition-colors cursor-pointer"
                    >
                      <ThumbsDown className="w-3.5 h-3.5" />
                      <span>Could be better</span>
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Author / Agency Bio Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#094454] text-[#75ADB2] flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                  KW
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[17px] font-[800] text-[#094454] font-outfit">
                      About Kenah Wellness Services LLC
                    </h4>
                    <span className="text-[10px] bg-[#e8f5d3] text-[#094454] font-bold px-2 py-0.5 rounded-full">
                      PA Licensed
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-slate-600 leading-[1.6]">
                    Dedicated to providing reliable, dignified, and loving in-home senior care throughout Allison Park, Pittsburgh, and Allegheny County. Every caregiver is background checked, trained, and supervised.
                  </p>
                  <div className="pt-1 flex items-center gap-4 text-xs font-semibold text-[#094454]">
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:underline flex items-center gap-1 text-[#75ADB2]">
                      <Phone className="w-3 h-3" /> {COMPANY_INFO.phone}
                    </a>
                    <span>•</span>
                    <button onClick={() => onNavigate('/contact-us')} className="hover:underline text-[#094454]">
                      Contact Care Coordinator
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Next / Prev Post Navigation */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <button
                    onClick={() => onNavigate(`/blog/${prevPost.slug}`)}
                    className="p-5 rounded-2xl border border-slate-200 bg-[#F4F6F0] hover:bg-slate-100 text-left transition-all group cursor-pointer"
                  >
                    <span className="text-[11px] font-bold text-[#75ADB2] uppercase tracking-wider flex items-center gap-1 mb-1">
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                      Previous Article
                    </span>
                    <p className="text-sm font-bold text-[#094454] line-clamp-2 leading-snug">
                      {prevPost.title}
                    </p>
                  </button>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <button
                    onClick={() => onNavigate(`/blog/${nextPost.slug}`)}
                    className="p-5 rounded-2xl border border-slate-200 bg-[#F4F6F0] hover:bg-slate-100 text-right transition-all group cursor-pointer"
                  >
                    <span className="text-[11px] font-bold text-[#75ADB2] uppercase tracking-wider flex items-center justify-end gap-1 mb-1">
                      Next Article
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <p className="text-sm font-bold text-[#094454] line-clamp-2 leading-snug">
                      {nextPost.title}
                    </p>
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              {/* Quick Assessment CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="bg-[#094454] text-white rounded-3xl p-7 shadow-xl space-y-4 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#75ADB2] text-slate-950 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <span className="text-[#75ADB2] text-[11px] font-[800] uppercase tracking-[1px] block mb-1">
                    Free Consultation
                  </span>
                  <h3 className="text-[20px] font-[800] text-white font-outfit leading-snug">
                    Need Guidance for Your Loved One?
                  </h3>
                </div>
                <p className="text-[13px] text-teal-100/90 leading-[1.6]">
                  Schedule a complimentary in-home assessment with our registered nurse in Allison Park or the Pittsburgh region.
                </p>
                <div className="space-y-2.5 pt-1">
                  <button
                    onClick={() => onNavigate('/free-quote')}
                    className="w-full bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] py-3 rounded-full text-[14px] transition-colors shadow-md cursor-pointer text-center block"
                  >
                    Schedule Free Assessment
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-full text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#75ADB2]" />
                    <span>Call {COMPANY_INFO.phone}</span>
                  </a>
                </div>
                <p className="text-[11px] text-teal-200/70 text-center">
                  100% Free • No Obligation • 24/7 Availability
                </p>
              </motion.div>

              {/* Table of Contents Widget */}
              {headings.length > 0 && (
                <div className="bg-[#F4F6F0] rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <BookOpen className="w-4 h-4 text-[#75ADB2]" />
                    <h4 className="text-sm font-[800] uppercase tracking-[1px] text-[#094454]">
                      In This Guide
                    </h4>
                  </div>
                  <nav className="space-y-1.5" aria-label="Table of Contents">
                    {headings.map((h) => {
                      const isActive = activeHeadingId === h.id;
                      return (
                        <button
                          key={h.id}
                          onClick={() => scrollToHeading(h.id)}
                          className={`w-full text-left py-1.5 px-2.5 rounded-lg text-[13px] transition-all flex items-center justify-between group cursor-pointer ${
                            isActive
                              ? 'bg-white text-[#094454] font-bold shadow-xs'
                              : 'text-slate-700 hover:text-[#094454] hover:bg-white/60'
                          }`}
                        >
                          <span className="line-clamp-1">{h.title}</span>
                          <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-[#75ADB2] shrink-0" />
                        </button>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Popular Care Guides Widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-sm font-[800] uppercase tracking-[1px] text-[#094454] pb-2 border-b border-slate-100">
                  Recommended Reads
                </h4>
                <div className="space-y-4">
                  {relatedPosts.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => onNavigate(`/blog/${r.slug}`)}
                      className="flex gap-3 group cursor-pointer items-start"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={r.image}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-1 flex-1">
                        <span className="text-[10px] font-bold text-[#75ADB2] uppercase tracking-wider block">
                          {r.date}
                        </span>
                        <h5 className="text-[13px] font-bold text-[#094454] group-hover:text-[#75ADB2] transition-colors leading-snug line-clamp-2">
                          {r.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & Trust Assurance Badge */}
              <div className="bg-[#F4F6F0] rounded-2xl p-5 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                <span className="font-bold text-[#094454] block uppercase tracking-wider text-[11px]">
                  Kenah Quality Promise
                </span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#75ADB2] shrink-0" />
                  <span>Licensed, bonded, and fully insured in PA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#75ADB2] shrink-0" />
                  <span>100% background-checked caregivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#75ADB2] shrink-0" />
                  <span>24/7 on-call coordinator support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Articles Showcase Section */}
      <section className="py-16 lg:py-24 bg-[#F4F6F0] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
          >
            <div>
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
                More Resources
              </span>
              <h2 className="text-[23px] sm:text-[30px] font-[800] text-[#094454] font-outfit">
                Explore More Elder Care Articles
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#094454] hover:text-[#75ADB2] transition-colors cursor-pointer shrink-0"
            >
              <span>View All Blog Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related, idx) => (
              <motion.article
                key={related.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => onNavigate(`/blog/${related.slug}`)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#094454]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#75ADB2]" />
                    <span>{related.date}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#75ADB2] uppercase tracking-wider block mb-1">
                      {related.category}
                    </span>
                    <h4 className="text-[15px] font-[800] text-[#094454] font-outfit group-hover:text-[#75ADB2] transition-colors line-clamp-2 leading-snug">
                      {related.title}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#094454] group-hover:text-[#75ADB2] transition-colors pt-2 border-t border-slate-100">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-[#094454] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl"
          >
            <h3 className="text-[22px] sm:text-[28px] font-[800] font-outfit text-white">
              Compassionate Care is Just a Call Away
            </h3>
            <p className="text-teal-100/90 text-[14px] sm:text-[15px] max-w-xl mx-auto leading-relaxed">
              Serving seniors and their loved ones in Allison Park, PA, and the Pittsburgh metro area with 24/7 dedicated in-home support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/free-quote')}
                className="bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] px-7 py-3 rounded-full transition-colors text-[14px] cursor-pointer shadow-md"
              >
                Schedule Free Consultation
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 border border-teal-300/40 hover:border-white text-white font-[700] px-6 py-3 rounded-full text-[14px] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#75ADB2]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

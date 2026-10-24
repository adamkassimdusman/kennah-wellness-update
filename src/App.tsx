/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { FaqPage } from './pages/FaqPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { FreeAssessmentPage } from './pages/FreeAssessmentPage';
import { LegalPage } from './pages/LegalPage';
import { OdpWaiverPage } from './pages/OdpWaiverPage';
import { SERVICES, ServiceItem } from './data/siteData';
import { BLOG_POSTS, BlogPost } from './data/blogData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const rawBase = import.meta.env.BASE_URL || '/';
  const basePath = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  const navigate = (path: string) => {
    // If path is a hash or external, use as is; otherwise prepend basePath if not already present
    const targetUrl =
      path.startsWith('#') || path.startsWith('http') || !basePath || path.startsWith(basePath)
        ? path
        : `${basePath}${path.startsWith('/') ? path : `/${path}`}`;

    if (targetUrl !== currentPath) {
      window.history.pushState({}, '', targetUrl);
      setCurrentPath(targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Match routes
  const renderContent = () => {
    // Normalise path (trim trailing slash unless root)
    let normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    // Strip subfolder basePath if present for route matching
    if (basePath && normalized.startsWith(basePath)) {
      normalized = normalized.slice(basePath.length) || '/';
    }

    if (normalized === '/' || normalized === '') {
      return <HomePage onNavigate={navigate} />;
    }

    if (
      normalized === '/odp-waiver-services' ||
      normalized === '/odp-services' ||
      normalized === '/developmental-disabilities' ||
      normalized === '/odp'
    ) {
      return <OdpWaiverPage onNavigate={navigate} />;
    }

    if (normalized === '/services') {
      return <ServicesPage onNavigate={navigate} />;
    }

    // Check service detail route: /services/:slug
    if (normalized.startsWith('/services/')) {
      const slug = normalized.replace('/services/', '');
      const foundService = SERVICES.find(
        (s) => s.slug === slug || s.legacySlugs.includes(slug)
      );
      if (foundService) {
        return <ServiceDetailPage service={foundService} onNavigate={navigate} />;
      }
      return <ServicesPage onNavigate={navigate} />;
    }

    if (normalized === '/about-us' || normalized === '/who-we-are') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (normalized === '/careers' || normalized === '/job-openings' || normalized === '/jobs') {
      return <CareersPage onNavigate={navigate} />;
    }

    if (normalized === '/about-us/faq' || normalized === '/faq') {
      return <FaqPage onNavigate={navigate} />;
    }

    if (normalized === '/about-us/customer-reviews' || normalized === '/customer-reviews') {
      return <ReviewsPage onNavigate={navigate} />;
    }

    if (normalized === '/blog') {
      return <BlogPage onNavigate={navigate} />;
    }

    if (normalized.startsWith('/blog/')) {
      const slug = normalized.replace('/blog/', '');
      const foundPost = BLOG_POSTS.find((p) => p.slug === slug);
      if (foundPost) {
        return <BlogPostPage post={foundPost} onNavigate={navigate} />;
      }
      return <BlogPage onNavigate={navigate} />;
    }

    if (normalized === '/contact-us') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (normalized === '/free-quote' || normalized === '/free-assessment') {
      return <FreeAssessmentPage onNavigate={navigate} />;
    }

    if (normalized === '/about-us/terms-of-service' || normalized === '/terms-of-service') {
      return <LegalPage type="terms" onNavigate={navigate} />;
    }

    if (normalized === '/about-us/privacy-policy' || normalized === '/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigate} />;
    }

    // Default fallback to HomePage
    return <HomePage onNavigate={navigate} />;
  };

  let activePath = currentPath;
  if (basePath && activePath.startsWith(basePath)) {
    activePath = activePath.slice(basePath.length) || '/';
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased">
      <Header currentPath={activePath} onNavigate={navigate} />
      <main className="flex-1 w-full">{renderContent()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

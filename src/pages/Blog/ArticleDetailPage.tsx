import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES_DATA } from '../../data/articles';
import { BlogSidebar } from '../../components/blog/BlogSidebar';
import { Badge } from '../../components/ui/Badge';
import { ArticleCard } from '../../components/cards/ArticleCard';
import { Clock, Eye, Link as LinkIcon, Check, ArrowLeft, ArrowRight } from 'lucide-react';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const article = ARTICLES_DATA.find((a) => a.slug === slug) || ARTICLES_DATA[0];
  const currentIndex = ARTICLES_DATA.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES_DATA[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES_DATA.length - 1 ? ARTICLES_DATA[currentIndex + 1] : null;
  const relatedArticles = ARTICLES_DATA.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-brand-yellow">News & Blog</Link>
          <span>/</span>
          <span className="text-brand-yellow truncate max-w-xs sm:max-w-md">{article.title}</span>
        </div>

        {/* 2-Column Article Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Article Content (8 Cols) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Header / Meta */}
            <div className="space-y-4">
              <Badge variant="yellow" size="md">
                {article.category}
              </Badge>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <span className="font-extrabold text-white block">
                      {article.author.name}
                    </span>
                    <span className="text-gray-500">{article.author.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span>{article.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                    {article.readTime}
                  </span>
                  {article.viewsCount && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {article.viewsCount.toLocaleString()}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-background-tertiary border border-border shadow-2xl">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body Content */}
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
              <p className="text-lg sm:text-xl font-medium text-gray-200 leading-relaxed border-l-4 border-brand-yellow pl-4 italic">
                {article.excerpt}
              </p>

              <p>
                As urban rhythms and electronic soundscapes continue to dominate streaming charts and festival mainstages worldwide, the intersection of live broadcasting and digital community engagement has never been more vibrant.
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4">
                Redefining the Broadcast Experience
              </h2>

              <p>
                From exclusive live studio recordings to high-definition 320kbps streams, listeners are increasingly demanding seamless fidelity across mobile apps, in-car dashboards, and smart home speakers.
              </p>

              <blockquote className="my-6 p-6 rounded-2xl bg-background-card border-l-4 border-brand-yellow text-white font-bold text-lg sm:text-xl italic shadow-sm">
                "Music is pure frequency. When the crowd and the sound system hit that resonant wavelength together, there is no feeling like it on Earth."
              </blockquote>

              <p>
                Stay locked into **Imole 106.3 FM** every weekday for non-stop live programming, real-time listener countdowns, and behind-the-scenes artist interviews.
              </p>
            </div>

            {/* Tags & Social Sharing Bar */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tags:</span>
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag.toLowerCase().replace(/ /g, '-'))}`}
                    className="px-3 py-1 rounded-lg bg-background-card border border-border text-xs font-bold text-gray-300 hover:border-brand-yellow hover:text-brand-yellow transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white hover:text-black text-gray-300 transition-colors"
                  aria-label="Share on X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#1877F2] hover:text-white text-gray-300 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-lg bg-white/5 hover:bg-brand-yellow hover:text-black text-gray-300 transition-colors flex items-center gap-1 text-xs"
                  aria-label="Copy Link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <LinkIcon className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-background-card border border-border flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-card">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shrink-0 border-2 border-brand-yellow"
              />
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-yellow">
                  Written by
                </span>
                <h4 className="text-lg font-extrabold text-white mt-0.5">
                  {article.author.name}
                </h4>
                <p className="text-xs text-gray-400 mb-2">{article.author.role}</p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {article.author.bio || 'Music journalist and broadcaster reporting on international artists, club culture, and live festivals for Imole 106.3 FM.'}
                </p>
              </div>
            </div>

            {/* Prev / Next Article Nav */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="group p-4 rounded-2xl bg-background-card border border-border hover:border-brand-yellow/50 transition-all flex items-center gap-3"
                >
                  <ArrowLeft className="w-5 h-5 text-brand-yellow group-hover:-translate-x-1 transition-transform shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Previous Article</span>
                    <h5 className="text-xs font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
                      {prevArticle.title}
                    </h5>
                  </div>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="group p-4 rounded-2xl bg-background-card border border-border hover:border-brand-yellow/50 transition-all flex items-center justify-between gap-3 text-right"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Next Article</span>
                    <h5 className="text-xs font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
                      {nextArticle.title}
                    </h5>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-yellow group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              ) : <div />}
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="pt-8 border-t border-border">
                <h3 className="text-xl font-extrabold text-white mb-6 border-l-2 border-brand-yellow pl-3">
                  Related Stories
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedArticles.map((rel) => (
                    <ArticleCard key={rel.id} article={rel} variant="standard" />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <BlogSidebar currentCategory={article.category.toLowerCase().replace(/ & | /g, '-')} />
          </div>
        </div>
      </div>
    </div>
  );
};

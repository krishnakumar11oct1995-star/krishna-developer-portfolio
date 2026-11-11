import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  Search, 
  X, 
  FileCode2, 
  ExternalLink,
  Flame,
  Terminal,
  Layers
} from 'lucide-react';
import { getAllDiscoveries, getAllDiscoveryTags, getDiscoveryBySlug } from '../lib/discoveries';
import DiscoveryPostView from './DiscoveryPostView';

export default function Discoveries() {
  const [discoveries, setDiscoveries] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    const all = getAllDiscoveries();
    setDiscoveries(all);
    setTags(getAllDiscoveryTags());

    const checkHashRoute = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#discoveries/')) {
        const slug = hash.replace('#discoveries/', '').trim();
        if (slug) {
          const matched = getDiscoveryBySlug(slug);
          if (matched) setActivePost(matched);
        }
      }
    };

    checkHashRoute();
    window.addEventListener('hashchange', checkHashRoute);
    return () => window.removeEventListener('hashchange', checkHashRoute);
  }, []);

  const handleOpenPost = (post) => {
    setActivePost(post);
    window.location.hash = `#discoveries/${post.slug}`;
  };

  const handleClosePost = () => {
    setActivePost(null);
    window.location.hash = '#discoveries';
  };

  const filteredDiscoveries = discoveries.filter(d => {
    const matchesTag = selectedTag === 'All' || d.categoryTags.includes(selectedTag);
    const matchesQuery = searchQuery === '' || 
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.categoryTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesQuery;
  });

  return (
    <section id="discoveries" className="py-24 relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Lightweight File-Based CMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Discoveries &amp; Architecture Feed
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            A continuous deployment log of architectural insights, governor limit optimization patterns, and AI-accelerated developer tooling powered by local Markdown files.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search discoveries by title, topic, or keyword..."
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-slate-900 border border-slate-750 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tags.map((tagObj) => (
              <button
                key={tagObj.name}
                onClick={() => setSelectedTag(tagObj.name)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 min-tap-target ${
                  selectedTag === tagObj.name
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25 border border-sky-400'
                    : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{tagObj.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedTag === tagObj.name ? 'bg-sky-700 text-sky-100' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tagObj.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Bento-Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredDiscoveries.map((post, idx) => {
            const isFeatured = post.featured;
            const isWide = isFeatured && (idx === 0 || idx === 1);

            return (
              <div
                key={post.slug}
                onClick={() => handleOpenPost(post)}
                className={`glass-card rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer relative overflow-hidden bg-[#0c1428]/85 ${
                  isWide 
                    ? 'md:col-span-2 border-sky-500/30 bg-gradient-to-br from-[#0c1836]/90 via-[#0c1428]/90 to-[#080c17]/90' 
                    : 'border-slate-800 hover:border-sky-500/40'
                }`}
              >
                {/* Featured Accent Badge */}
                {isFeatured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-l from-sky-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-bl-xl shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured Discovery</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-snug ${
                    isWide ? 'text-xl sm:text-2xl' : 'text-lg'
                  }`}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.categoryTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-sky-300 border border-slate-800 group-hover:border-sky-500/30 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {post.slug}.md
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:text-sky-300">
                    <span>Read Note</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Result State */}
        {filteredDiscoveries.length === 0 && (
          <div className="glass-card rounded-3xl p-12 text-center space-y-3 max-w-md mx-auto border border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="font-bold text-slate-200">No matching discoveries found</h4>
            <p className="text-xs text-slate-400">
              Try adjusting your search query or selecting "All" tags.
            </p>
            <button
              onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Dynamic Route Post View Template */}
      {activePost && (
        <DiscoveryPostView
          post={activePost}
          onClose={handleClosePost}
          onSelectPost={(p) => handleOpenPost(p)}
        />
      )}
    </section>
  );
}

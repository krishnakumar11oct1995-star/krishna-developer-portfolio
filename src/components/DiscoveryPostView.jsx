import React, { useEffect, useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Tag, 
  ArrowLeft, 
  User, 
  Sparkles, 
  Copy, 
  Bookmark, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { highlightCodeBlocks } from '../lib/prismConfig';

export default function DiscoveryPostView({ post, onClose, onSelectPost }) {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    highlightCodeBlocks();
    const modalBody = document.getElementById('discovery-post-content');
    if (modalBody) modalBody.scrollTop = 0;
  }, [post]);

  if (!post) return null;

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#discoveries/${post.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="discovery-modal-title"
    >
      {/* Container */}
      <div 
        id="discovery-post-content"
        className="relative w-full max-w-4xl max-h-[92vh] glass-card rounded-3xl border border-sky-500/30 shadow-2xl flex flex-col overflow-y-auto bg-[#0a1020] text-slate-100"
      >
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 p-4 sm:p-6 border-b border-slate-800 bg-[#0c1428]/95 backdrop-blur-md flex items-center justify-between gap-4">
          
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-750 transition-colors min-tap-target"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Feed</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-750 transition-colors min-tap-target"
              title="Copy shareable direct link"
              aria-label="Share Discovery Link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-750 min-tap-target"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Article Content Header */}
        <div className="p-6 sm:p-10 border-b border-slate-800/80 bg-gradient-to-b from-sky-950/20 to-transparent space-y-4">
          
          {/* Metadata Chips */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-sky-400">
              <User className="w-3.5 h-3.5" />
              {post.author || 'Krishna Kumar'}
            </span>
          </div>

          {/* Title */}
          <h1 id="discovery-modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Excerpt Lead */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {post.categoryTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Rendered HTML Markdown Body with Custom Prose Styling */}
        <div className="p-6 sm:p-10 prose prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
          <div 
            className="discovery-rendered-content space-y-4"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        {/* Author Footer Card */}
        <div className="p-6 sm:p-10 border-t border-slate-800 bg-[#080d1a] mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-sky-500/30 bg-slate-900 flex-shrink-0">
              <img 
                src="/profile.jpg" 
                alt="Krishna Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-100">Written by Krishna Kumar</div>
              <div className="text-xs text-sky-400 font-mono">Salesforce Developer &amp; Technical Lead</div>
              <div className="text-xs text-slate-400 mt-0.5">Sharing battle-tested architecture and developer tooling discoveries.</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-colors shadow min-tap-target"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}

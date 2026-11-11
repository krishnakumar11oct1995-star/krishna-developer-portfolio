import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  Check, 
  Tag, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Helper to render markdown-like content blocks safely
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-lg font-bold text-slate-100 mt-6 mb-2">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('---')) {
        return <hr key={index} className="border-slate-800 my-6" />;
      }
      if (paragraph.startsWith('```')) {
        const codeLines = paragraph.replace(/```[a-z]*\n?/g, '').trim();
        return (
          <pre key={index} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto my-4 shadow-inner">
            <code>{codeLines}</code>
          </pre>
        );
      }
      if (paragraph.startsWith('|')) {
        const rows = paragraph.split('\n');
        return (
          <div key={index} className="overflow-x-auto my-4">
            <table className="w-full text-xs text-left border-collapse border border-slate-800">
              <tbody>
                {rows.map((row, rIdx) => {
                  const cols = row.split('|').filter(c => c.trim().length > 0);
                  if (row.includes('---')) return null;
                  return (
                    <tr key={rIdx} className={rIdx === 0 ? 'bg-slate-900 font-bold text-slate-200' : 'border-t border-slate-800 text-slate-300'}>
                      {cols.map((col, cIdx) => (
                        <td key={cIdx} className="p-2 border-r border-slate-800">
                          {col.trim()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n');
        return (
          <ul key={index} className="space-y-1.5 my-3">
            {items.map((it, iIdx) => (
              <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0"></span>
                <span>{it.replace(/^- /, '')}</span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-xs sm:text-sm text-slate-300 leading-relaxed my-3">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] glass-card rounded-3xl border border-sky-500/30 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 bg-[#0b1329]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-2">
              <span className="px-2.5 py-0.5 rounded text-sky-300 bg-sky-500/15 border border-sky-500/30 font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
          {renderContent(article.content)}

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-sky-400 border border-slate-800 flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Link Copied' : 'Share Article'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}

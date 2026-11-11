import { marked } from 'marked';

// Configure marked with GitHub-flavored markdown and line breaks
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Robust YAML Frontmatter Parser
 * Parses metadata without external node dependencies
 */
export function parseFrontmatter(rawMarkdown, filePath = '') {
  const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]*([\s\S]*)$/;
  const match = rawMarkdown.match(frontmatterRegex);

  // Generate sanitized slug from filepath
  const fileName = filePath.split('/').pop()?.replace(/\.md$/, '') || 'untitled-discovery';
  const slug = fileName.toLowerCase().replace(/[^a-z0-9_-]/g, '-');

  if (!match) {
    return {
      metadata: {
        title: fileName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        date: new Date().toISOString().split('T')[0],
        categoryTags: ['General'],
        excerpt: rawMarkdown.slice(0, 160).replace(/[#*`_]/g, '').trim() + '...',
        author: 'Krishna Kumar',
        readTime: '3 min read',
        featured: false,
        slug
      },
      content: rawMarkdown,
      html: marked.parse(rawMarkdown)
    };
  }

  const [, frontmatterBlock, contentBody] = match;
  const metadata = {
    title: '',
    date: '',
    categoryTags: [],
    excerpt: '',
    author: 'Krishna Kumar',
    readTime: '5 min read',
    featured: false,
    slug
  };

  // Parse YAML lines
  const lines = frontmatterBlock.split(/[\r\n]+/);
  let currentKey = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Check for key: value
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex !== -1 && !trimmed.startsWith('-')) {
      const key = trimmed.slice(0, colonIndex).trim();
      let value = trimmed.slice(colonIndex + 1).trim();
      currentKey = key;

      // Clean surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      if (key === 'title') metadata.title = value;
      else if (key === 'date') metadata.date = value;
      else if (key === 'author') metadata.author = value;
      else if (key === 'readTime') metadata.readTime = value;
      else if (key === 'excerpt') metadata.excerpt = value;
      else if (key === 'featured') metadata.featured = value.toLowerCase() === 'true';
      else if (key === 'categoryTags') {
        // Handle inline array [tag1, tag2]
        if (value.startsWith('[') && value.endsWith(']')) {
          metadata.categoryTags = value
            .slice(1, -1)
            .split(',')
            .map(t => t.trim().replace(/^["']|["']$/g, ''))
            .filter(Boolean);
        } else if (value) {
          metadata.categoryTags = [value];
        }
      }
    } else if (trimmed.startsWith('-') && currentKey === 'categoryTags') {
      // Handle list item in YAML: - TagName
      const item = trimmed.replace(/^-\s*/, '').replace(/^["']|["']$/g, '').trim();
      if (item) metadata.categoryTags.push(item);
    }
  }

  // Fallback defaults
  if (!metadata.title) {
    metadata.title = fileName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  if (!metadata.excerpt && contentBody) {
    metadata.excerpt = contentBody.slice(0, 160).replace(/[#*`_]/g, '').trim() + '...';
  }
  if (!metadata.categoryTags.length) {
    metadata.categoryTags = ['Salesforce Architecture'];
  }
  if (!metadata.date) {
    metadata.date = '2026-08-01';
  }

  return {
    metadata,
    content: contentBody.trim(),
    html: marked.parse(contentBody.trim())
  };
}

/**
 * Data Fetching Pipeline
 * Loads all markdown files via Vite eager glob and sorts descending chronologically
 */
export function getAllDiscoveries() {
  const modules = import.meta.glob('/src/content/discoveries/*.md', { query: '?raw', import: 'default', eager: true });
  const discoveries = [];

  for (const [filePath, rawMarkdown] of Object.entries(modules)) {
    const parsed = parseFrontmatter(rawMarkdown, filePath);
    discoveries.push({
      ...parsed.metadata,
      rawContent: parsed.content,
      html: parsed.html
    });
  }

  // Strictly sort descending by date
  return discoveries.sort((a, b) => {
    const dateA = new Date(a.date).getTime() || 0;
    const dateB = new Date(b.date).getTime() || 0;
    return dateB - dateA;
  });
}

/**
 * Fetch a single discovery post by its sanitized slug
 */
export function getDiscoveryBySlug(slug) {
  const all = getAllDiscoveries();
  return all.find(d => d.slug === slug) || null;
}

/**
 * Extract all unique technical category tags with counts
 */
export function getAllDiscoveryTags() {
  const all = getAllDiscoveries();
  const tagCounts = { 'All': all.length };

  for (const item of all) {
    for (const tag of item.categoryTags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }

  return Object.keys(tagCounts).map(name => ({
    name,
    count: tagCounts[name]
  }));
}

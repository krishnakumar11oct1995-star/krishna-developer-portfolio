import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Load language components for technical blogs
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';

// Alias Apex to Java syntax parser in Prism
Prism.languages.apex = Prism.languages.java;

export function highlightCodeBlocks() {
  if (typeof window !== 'undefined') {
    Prism.highlightAll();
  }
}

export default Prism;

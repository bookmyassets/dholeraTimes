// lib/toc-utils.jsx (or utils/toc-utils.jsx)
// Server-side utility functions for TOC

/**
 * Generate slug from text
 * @param {string} text - The heading text
 * @returns {string} - URL-safe slug
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Extract headings from blockContent (Portable Text)
 * @param {Array} blocks - The Portable Text blocks
 * @returns {Array} - Array of heading objects with text, level, and slug
 */
export function extractHeadings(blocks) {
  if (!blocks) return [];
  
  return blocks
    .filter(block => 
      block._type === 'block' && 
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(block.style)
    )
    .map(block => {
      const text = block.children
        ?.filter(child => child._type === 'span')
        .map(child => child.text)
        .join('') || '';
      
      return {
        text,
        level: parseInt(block.style.replace('h', '')),
        slug: generateSlug(text)
      };
    });
}

/**
 * Create heading ID from Portable Text value
 * @param {Object} value - The Portable Text block value
 * @returns {string} - The generated slug ID
 */
export function createHeadingId(value) {
  if (!value?.children) return '';
  
  const text = value.children
    ?.filter(child => child._type === 'span')
    .map(child => child.text)
    .join('') || '';
  
  return generateSlug(text);
}
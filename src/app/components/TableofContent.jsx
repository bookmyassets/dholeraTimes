// components/TableOfContents.jsx
'use client';

import { useEffect, useState } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach(({ slug }) => {
      const element = document.getElementById(slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="my-12 bg-gradient-to-br from-[#d3b66b]/5 to-[#b69b5e]/10 rounded-2xl shadow-lg border border-[#d3b66b]/20 p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-[#b69b5e] pb-3">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map(({ text, level, slug }) => (
          <li
            key={slug}
            style={{ marginLeft: `${(level - 1) * 1.5}rem` }}
            className="transition-all duration-200"
          >
            <a 
              href={`#${slug}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(slug);
                if (element) {
                  const offset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                activeId === slug
                  ? 'bg-gradient-to-r from-[#d3b66b] to-[#b69b5e] text-white font-semibold shadow-md'
                  : 'text-gray-700 hover:bg-[#b69b5e]/10 hover:text-[#b69b5e] hover:pl-6'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents; 
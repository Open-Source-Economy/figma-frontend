import React from 'react';

interface BlogListProps {
  items: string[];
}

export function BlogList({ items }: BlogListProps) {
  return (
    <ul className="mb-6 pl-0 list-none">
      {items.map((listItem, i) => (
        <li key={i} className="text-brand-neutral-700 mb-2 pl-7 relative before:content-['•'] before:absolute before:left-0 before:text-brand-accent">
          {listItem}
        </li>
      ))}
    </ul>
  );
}

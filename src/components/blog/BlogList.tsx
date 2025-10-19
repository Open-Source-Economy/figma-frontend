import React from 'react';

interface BlogListProps {
  items: string[];
}

export function BlogList({ items }: BlogListProps) {
  return (
    <ul className="blog-list">
      {items.map((listItem, i) => (
        <li key={i} className="blog-list-item">
          {listItem}
        </li>
      ))}
    </ul>
  );
}

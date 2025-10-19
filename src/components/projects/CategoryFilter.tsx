import React from 'react';
import { Badge } from '../ui/badge';
import { Check } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  className = ''
}: CategoryFilterProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <button
        onClick={() => onSelectCategory(null)}
        className={`inline-flex items-center gap-1.5 px-3 h-10 rounded-lg border text-sm transition-all duration-200 ${
          selectedCategory === null
            ? 'bg-brand-accent text-white border-brand-accent'
            : 'bg-background border-border hover:border-brand-accent/50 text-foreground hover:bg-card'
        }`}
      >
        {selectedCategory === null && <Check className="w-3.5 h-3.5" />}
        <span>All Projects</span>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`inline-flex items-center gap-1.5 px-3 h-10 rounded-lg border text-sm transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-brand-accent text-white border-brand-accent'
              : 'bg-background border-border hover:border-brand-accent/50 text-foreground hover:bg-card'
          }`}
        >
          {selectedCategory === category && <Check className="w-3.5 h-3.5" />}
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
}

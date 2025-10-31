import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryOption {
  key: string;
  label: string;
  icon: LucideIcon;
}

interface CategoryFiltersProps {
  categories: CategoryOption[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  className?: string;
}

/**
 * CategoryFilters - Filterable button group for service categories
 * Used in maintainer profiles to filter services by category
 */
export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-3 py-1.5 rounded-lg border transition-all ${
          selectedCategory === null
            ? 'bg-brand-accent border-brand-accent text-white'
            : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
        }`}
      >
        All Services
      </button>
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.key}
            onClick={() => onCategoryChange(category.key)}
            className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
              selectedCategory === category.key
                ? 'bg-brand-accent border-brand-accent text-white'
                : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {category.label}
          </button>
        );
      })}
    </div>
  );
};

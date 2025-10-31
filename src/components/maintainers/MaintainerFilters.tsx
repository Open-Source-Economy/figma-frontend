import React from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
import { Button } from '../ui/button';

interface MaintainerFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  verificationFilter: 'all' | 'verified' | 'unverified';
  onVerificationFilterChange: (filter: 'all' | 'verified' | 'unverified') => void;
  sortBy: 'name' | 'verified' | 'projects' | 'recent';
  onSortChange: (sort: 'name' | 'verified' | 'projects' | 'recent') => void;
  totalCount: number;
  filteredCount: number;
}

/**
 * MaintainerFilters - Search, filter, and sort controls for maintainers directory
 * Following DRY principles for consistent filtering UI
 */
export const MaintainerFilters: React.FC<MaintainerFiltersProps> = ({
  searchQuery,
  onSearchChange,
  verificationFilter,
  onVerificationFilterChange,
  sortBy,
  onSortChange,
  totalCount,
  filteredCount
}) => {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-neutral-500" />
        <input
          type="text"
          placeholder="Search by name or username..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-brand-card-blue border border-brand-neutral-300/40 rounded-xl text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent/60 focus:ring-2 focus:ring-brand-accent/20 transition-all"
        />
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Verification Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-neutral-500" />
          <div className="flex items-center gap-1.5 p-1 bg-brand-neutral-200/30 rounded-lg border border-brand-neutral-300/30">
            <button
              onClick={() => onVerificationFilterChange('all')}
              className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                verificationFilter === 'all'
                  ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800 hover:bg-brand-neutral-300/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => onVerificationFilterChange('verified')}
              className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                verificationFilter === 'verified'
                  ? 'bg-brand-success/20 text-brand-success border border-brand-success/30'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800 hover:bg-brand-neutral-300/20'
              }`}
            >
              Verified
            </button>
            <button
              onClick={() => onVerificationFilterChange('unverified')}
              className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                verificationFilter === 'unverified'
                  ? 'bg-brand-warning/20 text-brand-warning border border-brand-warning/30'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800 hover:bg-brand-neutral-300/20'
              }`}
            >
              Unverified
            </button>
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <SortAsc className="w-4 h-4 text-brand-neutral-500" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="px-3 py-1.5 bg-brand-card-blue border border-brand-neutral-300/40 rounded-lg text-sm text-brand-neutral-800 focus:outline-none focus:border-brand-accent/60 focus:ring-2 focus:ring-brand-accent/20 transition-all"
          >
            <option value="verified">Verified First</option>
            <option value="name">Name (A-Z)</option>
            <option value="projects">Most Projects</option>
            <option value="recent">Recently Joined</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-brand-neutral-600">
        <span>
          Showing {filteredCount} of {totalCount} maintainers
        </span>
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="text-brand-accent hover:text-brand-accent-light transition-colors"
          >
            Clear search
          </button>
        )}
      </div>
    </div>
  );
};

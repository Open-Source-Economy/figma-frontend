import React from 'react';
import { Button } from '../ui/button';
import { Plus, MessageCircle, ArrowRight } from 'lucide-react';

interface RequestProjectSectionProps {
  searchQuery?: string;
  selectedCategory?: string | null;
  selectedLanguage?: string | null;
  onRequestProject?: () => void;
  className?: string;
}

export function RequestProjectSection({
  searchQuery,
  selectedCategory,
  selectedLanguage,
  onRequestProject,
  className = ''
}: RequestProjectSectionProps) {
  const hasSearch = searchQuery && searchQuery.length > 0;
  const hasCategory = selectedCategory !== null;
  const hasLanguage = selectedLanguage !== null;

  return (
    <div className={`bg-card border border-border rounded-xl p-8 md:p-12 text-center ${className}`}>
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/10 rounded-lg mb-6">
          <Plus className="w-6 h-6 text-brand-accent" />
        </div>
        
        <h3 className="mb-4 text-foreground">
          {hasSearch || hasCategory || hasLanguage
            ? "Can't Find What You're Looking For?"
            : "Want to See More Projects?"}
        </h3>
        
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {hasSearch || hasCategory || hasLanguage ? (
            <>
              We're continuously expanding our network of open source projects. 
              {hasSearch && (
                <span> Your search for <span className="text-brand-accent">&quot;{searchQuery}&quot;</span> hasn't matched any projects yet, but we'd love to add it!</span>
              )}
              {!hasSearch && hasCategory && !hasLanguage && (
                <span> We're actively adding more projects in the <span className="text-brand-accent">{selectedCategory}</span> category.</span>
              )}
              {!hasSearch && !hasCategory && hasLanguage && (
                <span> We're actively adding more <span className="text-brand-accent">{selectedLanguage}</span> projects.</span>
              )}
              {!hasSearch && hasCategory && hasLanguage && (
                <span> We're actively adding more <span className="text-brand-accent">{selectedLanguage}</span> projects in the <span className="text-brand-accent">{selectedCategory}</span> category.</span>
              )}
            </>
          ) : (
            <>
              Our network is growing every day with new high-quality open source projects. 
              Request a project you'd like to see, and we'll prioritize bringing expert maintainers on board.
            </>
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={onRequestProject}
            className="bg-brand-accent hover:bg-brand-accent-dark text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Request a Project
          </Button>
          <Button
            onClick={onRequestProject}
            variant="outline"
            className="border-border hover:bg-card"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Us
          </Button>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>We typically onboard new projects within 2-4 weeks</p>
        </div>
      </div>
    </div>
  );
}

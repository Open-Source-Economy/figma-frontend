import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export interface HeadingLevelsDemoProps {
  /** Callback to navigate to home page */
  onNavigateHome: () => void;
  /** Callback for navigation item clicks */
  onNavItemClick: (href: string) => void;
}

/**
 * HeadingLevelsDemo - Demonstrates all heading levels (h1-h6) 
 * according to the design system typography
 */
export function HeadingLevelsDemo({ onNavigateHome, onNavItemClick }: HeadingLevelsDemoProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      {/* Header */}
      <Header onNavItemClick={onNavItemClick} />
      
      {/* Main Content */}
      <div className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="bg-brand-card-blue rounded-2xl p-8 lg:p-12 border border-brand-neutral-300/10 mb-12">
            <h1 className="text-brand-neutral-900 mb-4">
              Typography Hierarchy Demonstration
            </h1>
            <p className="text-brand-neutral-600 leading-relaxed">
              This page demonstrates all heading levels (h1 through h6) as defined in our design system. 
              Each heading level has specific font size, weight, line height, and letter spacing optimized 
              for readability and visual hierarchy.
            </p>
          </div>

          {/* Heading Examples */}
          <div className="space-y-12">
            {/* H1 Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-4">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Heading Level 1 (h1)
                </span>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Font: 30px (1.875rem) • Weight: 600 (Semibold) • Line Height: 1.375 • Letter Spacing: -0.025em
                </p>
              </div>
              <h1 className="text-brand-neutral-900">
                This is a Heading Level 1
              </h1>
              <p className="text-brand-neutral-600 mt-4">
                Used for page titles and primary headings. This is the most prominent heading level 
                and should typically appear only once per page.
              </p>
            </section>

            {/* H2 Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-4">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Heading Level 2 (h2)
                </span>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Font: 24px (1.5rem) • Weight: 600 (Semibold) • Line Height: 1.375 • Letter Spacing: -0.025em
                </p>
              </div>
              <h2 className="text-brand-neutral-900">
                This is a Heading Level 2
              </h2>
              <p className="text-brand-neutral-600 mt-4">
                Used for major section headings. H2s divide the page into primary content sections 
                and are used in the table of contents for blog posts.
              </p>
            </section>

            {/* H3 Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-4">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Heading Level 3 (h3)
                </span>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Font: 20px (1.25rem) • Weight: 500 (Medium) • Line Height: 1.5 • Letter Spacing: 0em
                </p>
              </div>
              <h3 className="text-brand-neutral-900">
                This is a Heading Level 3
              </h3>
              <p className="text-brand-neutral-600 mt-4">
                Used for subsections within major sections. H3s provide the next level of content 
                organization and help break down complex topics.
              </p>
            </section>

            {/* H4 Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-4">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Heading Level 4 (h4)
                </span>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Font: 18px (1.125rem) • Weight: 500 (Medium) • Line Height: 1.5 • Letter Spacing: 0em
                </p>
              </div>
              <h4 className="text-brand-neutral-900">
                This is a Heading Level 4
              </h4>
              <p className="text-brand-neutral-600 mt-4">
                Used for sub-subsections and detailed topic divisions. H4s are perfect for breaking 
                down steps in processes or listing specific points under a subsection.
              </p>
            </section>

            {/* H5 Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-4">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Heading Level 5 (h5)
                </span>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Font: 16px (1rem) • Weight: 500 (Medium) • Line Height: 1.5 • Letter Spacing: 0em
                </p>
              </div>
              <h5 className="text-brand-neutral-900">
                This is a Heading Level 5
              </h5>
              <p className="text-brand-neutral-600 mt-4">
                Used for minor headings and inline emphasis. H5s are useful for technical documentation 
                and detailed specifications where deep hierarchy is needed.
              </p>
            </section>

            {/* H6 Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-4">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Heading Level 6 (h6)
                </span>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Font: 14px (0.875rem) • Weight: 500 (Medium) • Line Height: 1.5 • Letter Spacing: 0.025em • Transform: Uppercase
                </p>
              </div>
              <h6 className="text-brand-neutral-900">
                This is a Heading Level 6
              </h6>
              <p className="text-brand-neutral-600 mt-4">
                The smallest heading level, often used for labels, overlines, or the deepest level 
                of content hierarchy. H6s appear in uppercase with wider letter spacing.
              </p>
            </section>

            {/* Combined Hierarchy Example */}
            <section className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
              <div className="mb-6">
                <span className="text-brand-accent text-sm font-medium uppercase tracking-wider">
                  Complete Hierarchy in Context
                </span>
              </div>
              
              <h1 className="text-brand-neutral-900 mb-6">Main Page Title (H1)</h1>
              <p className="text-brand-neutral-700 mb-6 leading-relaxed">
                This demonstrates how all heading levels work together to create a clear content hierarchy. 
                Each level has a distinct visual weight and purpose.
              </p>

              <h2 className="text-brand-neutral-900 mb-4">Primary Section (H2)</h2>
              <p className="text-brand-neutral-700 mb-6 leading-relaxed">
                Major sections of content are marked with H2 headings. These create clear divisions 
                between different topics or themes.
              </p>

              <h3 className="text-brand-neutral-900 mb-4">Subsection Title (H3)</h3>
              <p className="text-brand-neutral-700 mb-6 leading-relaxed">
                Subsections break down the primary sections into more specific topics or subtopics.
              </p>

              <h4 className="text-brand-neutral-900 mb-3">Detailed Point (H4)</h4>
              <p className="text-brand-neutral-700 mb-6 leading-relaxed">
                H4 headings provide another level of detail for complex topics that need further breakdown.
              </p>

              <h5 className="text-brand-neutral-900 mb-3">Specific Detail (H5)</h5>
              <p className="text-brand-neutral-700 mb-6 leading-relaxed">
                H5 headings are for very specific points or technical details within the content.
              </p>

              <h6 className="text-brand-neutral-900 mb-3">Label or Metadata (H6)</h6>
              <p className="text-brand-neutral-700 leading-relaxed">
                H6 headings work well for labels, metadata, or the deepest level of hierarchy.
              </p>
            </section>

            {/* Best Practices */}
            <section className="bg-gradient-to-br from-brand-accent/10 to-brand-highlight/10 rounded-2xl p-8 border border-brand-accent/20">
              <h2 className="text-brand-neutral-900 mb-4">Best Practices</h2>
              <ul className="space-y-3 text-brand-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Use only one H1 per page for the main title</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Maintain logical hierarchy - don't skip levels (e.g., H2 to H4)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Keep headings concise and descriptive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Use H2 for table of contents entries in blog posts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">•</span>
                  <span>Consider accessibility - screen readers use heading hierarchy for navigation</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      </div>
      
      {/* Footer */}
      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}

import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Badge } from '../ui/badge';
import { 
  BookOpen, 
  Building2, 
  Code, 
  DollarSign, 
  Headphones, 
  Layers, 
  Heart, 
  Settings,
  Search
} from 'lucide-react';
import { faqData } from '../../data/faqData';
import { FAQAccordion } from '../faq/FAQAccordion';

interface FAQPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

const iconMap: Record<string, any> = {
  BookOpen,
  Building2,
  Code,
  DollarSign,
  Headphones,
  Layers,
  Heart,
  Settings
};

export function FAQPage({ onNavigateHome, onNavItemClick }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  // Filter FAQ data based on search query
  const filteredData = React.useMemo(() => {
    if (!searchQuery && !selectedCategory) return faqData;

    return faqData
      .map(category => ({
        ...category,
        questions: category.questions.filter(q => {
          const matchesSearch = !searchQuery || 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase());
          
          const matchesCategory = !selectedCategory || category.category === selectedCategory;
          
          return matchesSearch && matchesCategory;
        })
      }))
      .filter(category => category.questions.length > 0);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-accent/10 py-10 border-b border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 bg-brand-accent/10 border-brand-accent/30 text-brand-accent">
              Help Center
            </Badge>
            <h1 className="text-brand-neutral-950 mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-brand-neutral-600 mb-6">
              Find answers to common questions about Open Source Economy, our services, pricing, and how we support the open source ecosystem.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-neutral-500" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-brand-card-blue border border-brand-neutral-300 rounded-lg text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-brand-secondary py-4 border-b border-brand-neutral-300 sticky top-0 z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === null
                  ? 'bg-brand-accent border-brand-accent text-white'
                  : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
              }`}
            >
              All Topics
            </button>
            {faqData.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                    selectedCategory === category.category
                      ? 'bg-brand-accent border-brand-accent text-white'
                      : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{category.category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl">
          {filteredData.length === 0 ? (
            <div className="text-center py-10">
              <Search className="h-10 w-10 text-brand-neutral-500 mx-auto mb-3" />
              <h3 className="text-brand-neutral-700 mb-2">No questions found</h3>
              <p className="text-brand-neutral-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredData.map((category, catIdx) => {
                const Icon = iconMap[category.icon];
                return (
                  <div key={catIdx} className="scroll-mt-20" id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                    {/* Category Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-brand-accent" />
                        </div>
                        <h2 className="text-brand-neutral-900">{category.category}</h2>
                      </div>
                      <p className="text-brand-neutral-600 ml-10.5">
                        {category.description}
                      </p>
                    </div>

                    {/* Questions Accordion */}
                    <FAQAccordion
                      questions={category.questions}
                      idPrefix={`category-${catIdx}`}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-br from-brand-accent/10 via-brand-secondary to-brand-highlight/10 py-10 border-t border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-brand-neutral-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-brand-neutral-600 mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onNavItemClick('contact')}
              className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => onNavItemClick('get-started')}
              className="px-5 py-2.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp, Check, Quote } from 'lucide-react';
import type { CaseStudy } from '../../data/projectDetailData';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl overflow-hidden">
      {/* Header - Always Visible */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{caseStudy.companyLogo}</div>
            <div>
              <h4 className="text-brand-neutral-900">{caseStudy.companyName}</h4>
              <Badge variant="secondary" className="mt-1">Success Story</Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Read More
              </>
            )}
          </Button>
        </div>

        {/* Challenge - Always Visible */}
        <div className="mb-4">
          <h5 className="text-brand-neutral-800 mb-2">Challenge</h5>
          <p className="text-brand-neutral-700">{caseStudy.challenge}</p>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 space-y-6">
          {/* Solution */}
          <div>
            <h5 className="text-brand-neutral-800 mb-2">Solution</h5>
            <p className="text-brand-neutral-700">{caseStudy.solution}</p>
          </div>

          {/* Results */}
          <div>
            <h5 className="text-brand-neutral-800 mb-3">Results</h5>
            <div className="grid md:grid-cols-2 gap-3">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-3 bg-brand-success/5 border border-brand-success/20 rounded-lg"
                >
                  <Check className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                  <span className="text-brand-neutral-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="p-6 bg-brand-secondary border border-brand-accent/20 rounded-lg relative">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-accent/20" />
            <p className="text-brand-neutral-700 mb-4 italic">"{caseStudy.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-brand-neutral-300"></div>
              <div className="text-right">
                <p className="text-brand-neutral-800">{caseStudy.quotee}</p>
                <p className="text-brand-neutral-600">{caseStudy.quoteeRole}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { SectionHeader } from '../ui/section-header';
import type { FAQItem } from '../../data/projectDetailData';
import { FAQAccordion } from '../faq/FAQAccordion';

interface ProjectFAQProps {
  items: FAQItem[];
}

export function ProjectFAQ({ items }: ProjectFAQProps) {
  return (
    <div>
      <SectionHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about working with us"
        spacing="lg"
        visibility="normal"
      />
      
      <FAQAccordion questions={items} idPrefix="project" />
    </div>
  );
}
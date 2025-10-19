import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { SectionHeader } from '../ui/section-header';
import type { FAQItem } from '../../data/projectDetailData';

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
      
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-brand-neutral-900 hover:text-brand-accent">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-brand-neutral-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

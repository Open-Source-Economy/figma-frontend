import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQQuestion[];
  className?: string;
  idPrefix?: string;
}

export function FAQAccordion({ questions, className = '', idPrefix = 'faq' }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={`space-y-2 ${className}`}>
      {questions.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={`${idPrefix}-${idx}`}
          className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg overflow-hidden hover:border-brand-accent/50 transition-colors"
        >
          <AccordionTrigger className="px-4 py-3 hover:no-underline text-left">
            <span className="text-brand-neutral-900 pr-4">
              {faq.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3 text-brand-neutral-700">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

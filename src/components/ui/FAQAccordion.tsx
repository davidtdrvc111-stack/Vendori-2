'use client';

import { useState, useDeferredValue, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // useDeferredValue für bessere Performance bei vielen FAQs
  const deferredOpenIndex = useDeferredValue(openIndex);

  // useCallback um Re-Renders zu vermeiden
  const toggleItem = useCallback((index: number) => {
    setOpenIndex((prev) => prev === index ? null : index);
  }, []);

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden',
            'bg-white dark:bg-stone-800/50',
            'shadow-sm dark:shadow-none',
            'backdrop-blur-sm',
            'transition-all duration-300',
            deferredOpenIndex === index && 'ring-2 ring-primary-500/30'
          )}
        >
          <button
            onClick={() => toggleItem(index)}
            className={cn(
              'w-full px-6 py-5 flex items-center justify-between',
              'text-left transition-colors duration-200',
              'hover:bg-neutral-100 dark:hover:bg-white/5',
              'focus:outline-none focus:ring-2 focus:ring-primary-500/50'
            )}
            aria-expanded={deferredOpenIndex === index}
            aria-controls={`faq-content-${index}`}
            id={`faq-button-${index}`}
            type="button"
          >
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white pr-8">
              {item.question}
            </h3>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-primary-500 flex-shrink-0',
                'transition-transform duration-300',
                deferredOpenIndex === index && 'rotate-180'
              )}
              aria-hidden="true"
            />
          </button>

          <div
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            aria-hidden={deferredOpenIndex !== index}
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              deferredOpenIndex === index ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="px-6 pb-6 pt-2">
              {/* HTML is sanitized at build time via sanitizeFAQHTML() in faq-unified.ts */}
              {/* role="document" scopes injected heading/landmark hierarchy away from page outline */}
              <div
                role="document"
                className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed prose prose-neutral dark:prose-invert max-w-none
                  [&_p]:my-2 [&_p]:leading-relaxed [&_p]:text-neutral-600 dark:[&_p]:text-neutral-300
                  [&_ul]:my-3 [&_ul]:space-y-2 [&_ul]:pl-0 [&_ul]:list-none
                  [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:text-neutral-600 dark:[&_li]:text-neutral-300
                  [&_li_span.bullet]:text-primary-600 dark:[&_li_span.bullet]:text-primary-400 [&_li_span.bullet]:mt-0.5 [&_li_span.bullet]:shrink-0 [&_li_span.bullet]:text-lg [&_li_span.bullet]:leading-none
                  [&_strong]:font-semibold [&_strong]:text-neutral-800 dark:[&_strong]:text-neutral-100
                  [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:shadow-xl
                  [&_thead]:bg-primary-600 [&_thead_tr]:border-none
                  [&_thead_th]:px-4 [&_thead_th]:py-4 [&_thead_th]:text-left [&_thead_th]:font-black [&_thead_th]:text-white [&_thead_th]:text-sm [&_thead_th]:uppercase [&_thead_th]:tracking-wide
                  [&_tbody_tr]:border-b [&_tbody_tr]:border-neutral-200 dark:[&_tbody_tr]:border-white/5 [&_tbody_tr]:transition-colors [&_tbody_tr]:hover:bg-neutral-50 dark:[&_tbody_tr]:hover:bg-white/5
                  [&_tbody_tr:last-child]:border-none
                  [&_tbody_td]:px-4 [&_tbody_td]:py-5 [&_tbody_td]:text-neutral-700 dark:[&_tbody_td]:text-neutral-200 [&_tbody_td]:align-top
                  [&_tbody_td:first-child]:font-semibold [&_tbody_td:first-child]:text-primary-600 dark:[&_tbody_td:first-child]:text-primary-400"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

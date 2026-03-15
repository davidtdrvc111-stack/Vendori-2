'use client';

import { useState } from 'react';
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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'border border-white/10 rounded-2xl overflow-hidden',
            'bg-stone-800/50 dark:bg-stone-800/50',
            'backdrop-blur-sm',
            'transition-all duration-300',
            openIndex === index && 'ring-2 ring-primary-500/30'
          )}
        >
          <button
            onClick={() => toggleItem(index)}
            className={cn(
              'w-full px-6 py-5 flex items-center justify-between',
              'text-left transition-colors duration-200',
              'hover:bg-white/5',
              'focus:outline-none focus:ring-2 focus:ring-primary-500/50'
            )}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg md:text-xl font-semibold text-white pr-8">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-primary-500 flex-shrink-0',
                'transition-transform duration-300',
                openIndex === index && 'rotate-180'
              )}
            />
          </button>

          <div
            className={cn(
              'overflow-hidden transition-all duration-300 ease-in-out',
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="px-6 pb-6 pt-2">
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export interface ServicesSectionProps {
  className?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'rocket' | 'globe' | 'shopping-bag';
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  benefits?: string[];
}

export interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

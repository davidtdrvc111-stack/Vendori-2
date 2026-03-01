export interface AboutSectionProps {
  className?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface TeamValue {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

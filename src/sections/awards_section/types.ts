export interface AwardsSectionProps {
  className?: string;
}

export interface Award {
  id: string;
  name: string;           // z.B. "Shop Usability Award 2025"
  category: string;       // z.B. "Beste Benutzerfreundlichkeit"
  year: string;           // z.B. "2025"
  context: string;        // Kontextualisierender Satz
  icon: 'trophy' | 'star' | 'medal' | 'award';
}

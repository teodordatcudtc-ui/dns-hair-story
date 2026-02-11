import { cn } from '@/lib/utils';

type IconName = 'scissors' | 'razor' | 'clipper' | 'brush';

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

interface ServiceIconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ServiceIcon({ name, size = 'md', className }: ServiceIconProps) {
  const sizeClass = sizeClasses[size];
  const baseClass = cn('shrink-0 text-dns-gold', sizeClass, className);

  switch (name) {
    case 'scissors':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M9 5l7 7-7 7" />
          <path d="M15 5l-7 7 7 7" />
        </svg>
      );
    case 'razor':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 6l16 12" />
          <path d="M4 18l16-12" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'clipper':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M7 8h2" />
          <path d="M15 8h2" />
          <path d="M7 16h10" />
        </svg>
      );
    case 'brush':
      return (
        <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2v6" />
          <path d="M7 8l5-6 5 6" />
          <path d="M4 14h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
        </svg>
      );
    default:
      return null;
  }
}

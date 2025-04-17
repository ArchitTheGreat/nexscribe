import { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered';
  hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverEffect = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-lg overflow-hidden';
    
    const variants = {
      default: 'bg-white dark:bg-gray-800 shadow',
      bordered: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    };
    
    const hoverStyles = hoverEffect 
      ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' 
      : '';
    
    const classes = `${baseStyles} ${variants[variant]} ${hoverStyles} ${className || ''}`;
    
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
import React from 'react';
import { TableCell as BaseTableCell } from '../ui/table';
import { Badge } from '../ui/badge';
import { cn } from '../ui/utils';
import { LucideIcon } from 'lucide-react';

interface TableCellProps extends React.ComponentProps<'td'> {
  icon?: LucideIcon;
  iconColor?: string;
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  };
  align?: 'left' | 'center' | 'right';
}

export function TableCell({ 
  children, 
  className, 
  icon: Icon, 
  iconColor,
  badge,
  align = 'left',
  ...props 
}: TableCellProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align];

  return (
    <BaseTableCell 
      className={cn(alignClass, className)} 
      {...props}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon 
            className={cn(
              "h-4 w-4 flex-shrink-0",
              iconColor || "text-muted-foreground"
            )} 
          />
        )}
        <span className="flex-1">{children}</span>
        {badge && (
          <Badge variant={badge.variant || 'secondary'} className="ml-auto">
            {badge.text}
          </Badge>
        )}
      </div>
    </BaseTableCell>
  );
}
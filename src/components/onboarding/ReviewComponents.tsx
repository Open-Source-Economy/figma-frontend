import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Edit2, LucideIcon } from 'lucide-react';

interface ReviewCardProps {
  children: React.ReactNode;
}

export function ReviewCard({ children }: ReviewCardProps) {
  return (
    <Card className="bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border-brand-neutral-300 p-4">
      {children}
    </Card>
  );
}

interface ReviewCardHeaderProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  stepNumber: number;
  metadata?: string;
  onEdit: () => void;
  editButtonColor: string;
}

export function ReviewCardHeader({
  icon: Icon,
  iconColor,
  title,
  stepNumber,
  metadata,
  onEdit,
  editButtonColor
}: ReviewCardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-1.5 pb-2 border-b border-brand-neutral-300/50">
      <div className="flex items-center gap-2.5">
        <Icon className={`h-4 w-4 ${iconColor}`} />
        <div className="flex items-baseline gap-2">
          <h3 className="text-brand-neutral-900 text-base">{title}</h3>
          <span className="text-brand-neutral-500 text-xs">
            • Step {stepNumber}
            {metadata && ` • ${metadata}`}
          </span>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onEdit}
        className={`gap-1.5 h-7 px-2 ${editButtonColor}`}
      >
        <Edit2 className="h-3.5 w-3.5" />
        <span className="text-xs">Edit</span>
      </Button>
    </div>
  );
}

interface ReviewFieldProps {
  label: string;
  value: React.ReactNode;
  minWidth?: string;
}

export function ReviewField({ label, value, minWidth = 'min-w-[100px]' }: ReviewFieldProps) {
  return (
    <div className="flex items-baseline gap-2">
      <span className={`text-brand-neutral-500 text-xs ${minWidth}`}>{label}</span>
      <div className="text-brand-neutral-900 text-sm flex-1">{value}</div>
    </div>
  );
}

interface ReviewSectionProps {
  children: React.ReactNode;
  withDivider?: boolean;
}

export function ReviewSection({ children, withDivider = false }: ReviewSectionProps) {
  return (
    <>
      {withDivider && <div className="border-t border-brand-neutral-300/30"></div>}
      <div className="space-y-2">{children}</div>
    </>
  );
}
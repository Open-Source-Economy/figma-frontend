import React from 'react';
import { Input } from '../ui/input';
import { cn } from '../ui/utils';
import { CheckCircle, AlertCircle, LucideIcon } from 'lucide-react';

interface InputWithIconProps extends React.ComponentProps<typeof Input> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  state?: 'default' | 'error' | 'success' | 'warning';
  onIconClick?: () => void;
}

export function InputWithIcon({ 
  leftIcon: LeftIcon, 
  rightIcon: RightIcon,
  state = 'default',
  onIconClick,
  className,
  variant,
  ...props 
}: InputWithIconProps) {
  // Determine variant based on state
  const inputVariant = state === 'error' ? 'error' : state === 'success' ? 'success' : state === 'warning' ? 'warning' : variant || 'default';
  
  const StateIcon = state === 'success' ? CheckCircle : state === 'error' ? AlertCircle : RightIcon;
  
  return (
    <Input
      leftIcon={LeftIcon}
      rightIcon={StateIcon}
      variant={inputVariant}
      className={className}
      {...props}
    />
  );
}
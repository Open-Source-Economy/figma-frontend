import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PasswordMatchIndicatorProps {
  passwordConfirm: string;
  passwordsMatch: boolean;
}

export function PasswordMatchIndicator({ passwordConfirm, passwordsMatch }: PasswordMatchIndicatorProps) {
  if (!passwordConfirm) return null;

  if (!passwordsMatch) {
    return (
      <p className="text-xs text-brand-error">Passwords do not match</p>
    );
  }

  return (
    <p className="text-xs text-brand-success flex items-center gap-1">
      <CheckCircle2 className="h-3.5 w-3.5" />
      Passwords match
    </p>
  );
}

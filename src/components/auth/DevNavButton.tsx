import React from 'react';

interface DevNavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function DevNavButton({ label, isActive, onClick }: DevNavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 rounded-full text-[11px] transition-all ${
        isActive
          ? 'bg-blue-500 text-white shadow-sm'
          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
      }`}
    >
      {label}
    </button>
  );
}

import React from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { Textarea } from '../../ui/textarea';
import { DeleteCommentDialog } from './DeleteCommentDialog';

interface ExpandableCommentSectionProps {
  isExpanded: boolean;
  onToggleExpanded: (expanded: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  onDelete: () => void;
  placeholder: string;
}

export const ExpandableCommentSection: React.FC<ExpandableCommentSectionProps> = ({
  isExpanded,
  onToggleExpanded,
  value,
  onChange,
  onDelete,
  placeholder,
}) => {
  return (
    <div className="mt-6 pt-6 border-t border-brand-neutral-300/20">
      {!isExpanded ? (
        <button
          type="button"
          onClick={() => onToggleExpanded(true)}
          className="flex items-center gap-2 text-sm text-brand-accent hover:text-brand-accent-light transition-colors"
        >
          <MessageSquarePlus className="w-4 h-4" />
          Add a comment
        </button>
      ) : (
        <>
          <div className="flex items-start justify-between mb-3">
            <div>
              <label className="text-sm text-brand-neutral-800">
                Comment <span className="text-brand-neutral-500">(Optional)</span>
              </label>
              <p className="text-xs text-brand-neutral-600 mt-1">
                Only visible to Open Source Economy team
              </p>
            </div>
            <DeleteCommentDialog onDelete={onDelete} />
          </div>
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="min-h-[100px] bg-form-background hover:bg-form-background-hover border-form-border hover:border-form-border-hover focus:border-brand-accent text-brand-neutral-900 placeholder:text-brand-neutral-500"
            rows={4}
          />
        </>
      )}
    </div>
  );
};

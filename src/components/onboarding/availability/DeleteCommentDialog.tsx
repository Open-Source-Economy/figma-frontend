import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../ui/alert-dialog';
import { Trash2 } from 'lucide-react';

interface DeleteCommentDialogProps {
  onDelete: () => void;
}

export const DeleteCommentDialog: React.FC<DeleteCommentDialogProps> = ({
  onDelete,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1 px-2 py-1 text-xs text-brand-error hover:text-brand-error-light bg-brand-error/10 hover:bg-brand-error/20 rounded-md transition-colors"
          title="Delete comment"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Delete
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-brand-secondary-dark border border-brand-neutral-300/10">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-brand-neutral-900">
            Delete comment?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-brand-neutral-600">
            Are you sure you want to delete this comment?{' '}
            <span className="text-brand-warning font-medium">This action cannot be undone.</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-brand-secondary-dark border-brand-neutral-300 text-brand-neutral-800 hover:bg-brand-secondary">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            className="bg-brand-error hover:bg-brand-error-dark text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

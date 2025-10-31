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

interface DeleteProjectDialogProps {
  trigger: React.ReactNode;
  onConfirm: () => void;
}

export const DeleteProjectDialog: React.FC<DeleteProjectDialogProps> = ({
  trigger,
  onConfirm,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-brand-card-blue border-brand-neutral-300 max-w-[calc(100vw-2rem)] sm:max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-brand-neutral-900">
            Remove project?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-brand-neutral-600">
            Are you sure you want to remove this project from your profile?{' '}
            <span className="text-brand-warning font-medium">This action cannot be undone.</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-brand-secondary-dark border-brand-neutral-300 text-brand-neutral-800 hover:bg-brand-secondary">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-brand-error hover:bg-brand-error-dark text-white"
          >
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

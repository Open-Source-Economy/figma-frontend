import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useFormState } from '../../hooks/useFormState';

export function TextareaShowcase() {
  const { formValues, updateField } = useFormState();

  return (
    <ShowcaseCard 
      title="Textarea" 
      description="Multi-line text input in different states with minimal height and resize capability"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="textarea-default">Default Textarea</Label>
            <Textarea 
              id="textarea-default"
              placeholder="Enter your message here... (resizable)"
              value={formValues.textarea}
              onChange={(e) => updateField('textarea', e.target.value)}
              rows={2}
              className="min-h-[60px] resize-y"
            />
            <p className="text-xs text-muted-foreground">Minimal height with vertical resize handle</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="textarea-success">Success State</Label>
            <div className="relative">
              <Textarea 
                id="textarea-success"
                value="This is a valid message with good content."
                className="border-brand-success focus:ring-brand-success pr-10 min-h-[60px] resize-y"
                rows={2}
                readOnly
              />
              <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-brand-success" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="textarea-large">Large Textarea</Label>
            <Textarea 
              id="textarea-large"
              placeholder="This starts larger but is still resizable..."
              rows={4}
              className="resize-y"
            />
            <p className="text-xs text-muted-foreground">Larger initial size, still resizable</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="textarea-error">Error State</Label>
            <div className="relative">
              <Textarea 
                id="textarea-error"
                placeholder="This field is required"
                className="border-brand-error focus:ring-brand-error pr-10 min-h-[60px] resize-y"
                rows={2}
              />
              <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-brand-error" />
            </div>
            <p className="text-sm text-brand-error">Message is required and must be at least 10 characters</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="textarea-disabled" className="text-muted-foreground">Disabled State</Label>
            <Textarea 
              id="textarea-disabled"
              placeholder="This textarea is disabled"
              rows={2}
              className="min-h-[60px]"
              disabled
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="textarea-fixed">Fixed Size (No Resize)</Label>
            <Textarea 
              id="textarea-fixed"
              placeholder="This textarea cannot be resized"
              rows={2}
              className="min-h-[60px] resize-none"
            />
            <p className="text-xs text-muted-foreground">Resize disabled for specific use cases</p>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
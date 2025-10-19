import React from 'react';
import { FormField } from '../forms/FormField';
import { InputWithIcon } from '../forms/InputWithIcon';
import { Input } from '../ui/input';
import { FormGrid } from '../forms/FormGrid';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface FormStateExample {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  leftIcon?: React.ComponentType<{ size?: number }>;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

interface FormStateShowcaseProps {
  title: string;
  description: string;
  examples: FormStateExample[];
  stateType: 'default' | 'success' | 'error' | 'disabled';
}

export function FormStateShowcase({ title, description, examples, stateType }: FormStateShowcaseProps) {
  const getStateProps = (stateType: string) => {
    switch (stateType) {
      case 'success':
        return {
          state: 'success' as const,
          rightIcon: CheckCircle,
          readOnly: true,
          className: 'border-brand-success focus:ring-brand-success'
        };
      case 'error':
        return {
          state: 'error' as const,
          rightIcon: AlertCircle,
          className: 'border-brand-error focus:ring-brand-error'
        };
      case 'disabled':
        return {
          disabled: true
        };
      default:
        return {};
    }
  };

  const getStateIcon = () => {
    switch (stateType) {
      case 'success':
        return <CheckCircle size={16} className="text-brand-success" />;
      case 'error':
        return <AlertCircle size={16} className="text-brand-error" />;
      case 'disabled':
        return <X size={16} className="text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStateColor = () => {
    switch (stateType) {
      case 'success':
        return 'text-brand-success';
      case 'error':
        return 'text-brand-error';
      case 'disabled':
        return 'text-muted-foreground';
      default:
        return '';
    }
  };

  const stateProps = getStateProps(stateType);

  return (
    <div>
      <h4 className={`mb-4 flex items-center gap-2 ${getStateColor()}`}>
        {getStateIcon()}
        {title}
      </h4>
      <FormGrid columns={3}>
        {examples.map((example, index) => (
          <FormField 
            key={index}
            label={example.label}
            error={example.error}
          >
            {example.leftIcon ? (
              <InputWithIcon
                type={example.type || 'text'}
                placeholder={example.placeholder}
                value={example.value}
                leftIcon={example.leftIcon}
                readOnly={example.value ? true : stateProps.readOnly}
                {...stateProps}
              />
            ) : (
              <Input
                type={example.type || 'text'}
                placeholder={example.placeholder}
                value={example.value}
                className={stateProps.className}
                disabled={stateProps.disabled}
                readOnly={example.value ? true : stateProps.readOnly}
              />
            )}
          </FormField>
        ))}
      </FormGrid>
    </div>
  );
}
import React from 'react';

interface FormState {
  text: string;
  email: string;
  password: string;
  number: string;
  search: string;
  url: string;
  tel: string;
  textarea: string;
  checkbox: boolean;
  radio: string;
  select: string;
  switch: boolean;
  slider: number[];
  toggle: boolean;
  otp: string;
  multiSelect: string[];
  date: Date | undefined;
}

const initialFormState: FormState = {
  text: '',
  email: '',
  password: '',
  number: '',
  search: '',
  url: '',
  tel: '',
  textarea: '',
  checkbox: false,
  radio: '',
  select: '',
  switch: false,
  slider: [50],
  toggle: false,
  otp: '',
  multiSelect: [],
  date: undefined
};

export function useFormState() {
  const [formValues, setFormValues] = React.useState<FormState>(initialFormState);
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  const updateField = React.useCallback(<K extends keyof FormState>(
    field: K, 
    value: FormState[K]
  ) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = React.useCallback(() => {
    setFormValues(initialFormState);
    setFormErrors({});
  }, []);

  const setError = React.useCallback((field: string, message: string) => {
    setFormErrors(prev => ({ ...prev, [field]: message }));
  }, []);

  const clearError = React.useCallback((field: string) => {
    setFormErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    formValues,
    formErrors,
    updateField,
    resetForm,
    setError,
    clearError
  };
}
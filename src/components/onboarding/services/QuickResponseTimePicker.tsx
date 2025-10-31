import React from 'react';
import { Button } from '../../ui/button';
import { Clock, Lightbulb, AlertCircle } from 'lucide-react';
import { BrandModal, BrandModalSection } from '../../ui/brand-modal';
import { SelectField } from '../../forms/SelectField';
import { InfoMessage } from '../../ui/info-message';

interface QuickResponseTimePickerProps {
  open: boolean;
  serviceName: string;
  responseTime: string;
  onClose: () => void;
  onSave: () => void;
  onChange: (value: string) => void;
}

export const QuickResponseTimePicker: React.FC<QuickResponseTimePickerProps> = ({
  open,
  serviceName,
  responseTime,
  onClose,
  onSave,
  onChange,
}) => {
  return (
    <BrandModal
      open={open}
      onClose={onClose}
      title="Set Response Time"
      description={`Set the maximum response time for ${serviceName}`}
      size="sm"
      footer={
        <div className="flex gap-3 justify-end w-full">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={onSave}
            className="bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white"
          >
            Save Response Time
          </Button>
        </div>
      }
    >
      <div className="py-4 px-1">
        <BrandModalSection
          icon={<Clock />}
          title={<span className="flex items-center gap-2">Maximum Response Time <span className="text-brand-error">*</span></span>}
          description="Commit to responding within this timeframe"
        >
          <SelectField
            label="Response Time"
            options={[
              { value: '24', label: '24 hours' },
              { value: '48', label: '48 hours' },
              { value: '72', label: '72 hours' },
              { value: '168', label: '1 week' },
            ]}
            value={responseTime}
            onChange={onChange}
          />
          <InfoMessage icon={Lightbulb} variant="info" className="mt-3">
            This service requires a response time commitment. Choose the maximum time you can reliably commit to responding.
          </InfoMessage>
        </BrandModalSection>
      </div>
    </BrandModal>
  );
};

import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { FormGrid } from '../forms/FormGrid';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Code2, GitBranch, Users } from 'lucide-react';

interface CheckboxExample {
  id: string;
  label: string;
  checked?: boolean | 'indeterminate';
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
}

interface SelectExample {
  label: string;
  description?: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function SelectionControlsShowcase() {
  const checkboxExamples: CheckboxExample[] = [
    { id: 'checkbox-default', label: 'Default' },
    { id: 'checkbox-checked', label: 'Checked', checked: true },
    { id: 'checkbox-indeterminate', label: 'Indeterminate', checked: 'indeterminate' },
    { id: 'checkbox-disabled', label: 'Disabled', disabled: true, labelClassName: 'text-muted-foreground' },
    { id: 'checkbox-disabled-checked', label: 'Disabled Checked', disabled: true, checked: true, labelClassName: 'text-muted-foreground' },
    { id: 'checkbox-error', label: 'Error State', className: 'border-brand-error', labelClassName: 'text-brand-error' },
    { id: 'checkbox-success', label: 'Success State', className: 'border-brand-success', checked: true, labelClassName: 'text-brand-success' },
    { id: 'checkbox-large', label: 'Large Size', className: 'h-5 w-5' }
  ];

  const selectExamples: SelectExample[] = [
    {
      label: 'Default Select',
      placeholder: 'Select an option',
      children: (
        <>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
        </>
      )
    },
    {
      label: 'Error Select',
      placeholder: 'Required selection',
      className: 'border-brand-error focus:ring-brand-error',
      description: 'Please select an option',
      children: (
        <>
          <SelectItem value="error1">Error Option 1</SelectItem>
          <SelectItem value="error2">Error Option 2</SelectItem>
        </>
      )
    },
    {
      label: 'Disabled Select',
      placeholder: 'Disabled select',
      disabled: true,
      children: (
        <SelectItem value="disabled">Disabled Option</SelectItem>
      )
    }
  ];

  const advancedSelectExamples: SelectExample[] = [
    {
      label: 'Select with Icons',
      placeholder: 'Choose a platform',
      children: (
        <>
          <SelectItem value="github">
            <div className="flex items-center gap-2">
              <Code2 size={16} />
              GitHub
            </div>
          </SelectItem>
          <SelectItem value="gitlab">
            <div className="flex items-center gap-2">
              <GitBranch size={16} />
              GitLab
            </div>
          </SelectItem>
          <SelectItem value="bitbucket">
            <div className="flex items-center gap-2">
              <Users size={16} />
              Bitbucket
            </div>
          </SelectItem>
        </>
      )
    },
    {
      label: 'Grouped Options',
      placeholder: 'Select a technology',
      children: (
        <>
          <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Frontend</div>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue.js</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Backend</div>
          <SelectItem value="node">Node.js</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
        </>
      )
    },
    {
      label: 'Select with Badge',
      placeholder: 'Choose a plan',
      children: (
        <>
          <SelectItem value="free">
            <div className="flex items-center justify-between w-full">
              <span>Free Plan</span>
              <Badge variant="secondary" className="ml-2">Free</Badge>
            </div>
          </SelectItem>
          <SelectItem value="pro">
            <div className="flex items-center justify-between w-full">
              <span>Pro Plan</span>
              <Badge className="ml-2">Popular</Badge>
            </div>
          </SelectItem>
          <SelectItem value="enterprise">
            <div className="flex items-center justify-between w-full">
              <span>Enterprise</span>
              <Badge variant="outline" className="ml-2">Custom</Badge>
            </div>
          </SelectItem>
        </>
      )
    },
    {
      label: 'Country/Region Select',
      placeholder: 'Select country',
      children: (
        <>
          <SelectItem value="us">🇺🇸 United States</SelectItem>
          <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
          <SelectItem value="ca">🇨🇦 Canada</SelectItem>
          <SelectItem value="au">🇦🇺 Australia</SelectItem>
          <SelectItem value="de">🇩🇪 Germany</SelectItem>
          <SelectItem value="fr">🇫🇷 France</SelectItem>
          <SelectItem value="jp">🇯🇵 Japan</SelectItem>
        </>
      )
    }
  ];

  const renderCheckboxGrid = () => (
    <FormGrid columns={4}>
      {checkboxExamples.map((example) => (
        <div key={example.id} className="flex items-center space-x-2">
          <Checkbox 
            id={example.id} 
            checked={example.checked}
            disabled={example.disabled}
            className={example.className}
          />
          <Label 
            htmlFor={example.id} 
            className={example.labelClassName}
          >
            {example.label}
          </Label>
        </div>
      ))}
    </FormGrid>
  );

  const renderSelectGrid = (examples: SelectExample[], columns: number = 3) => (
    <FormGrid columns={columns}>
      {examples.map((example, index) => (
        <div key={index} className="space-y-2">
          <Label className={example.disabled ? 'text-muted-foreground' : ''}>{example.label}</Label>
          <Select disabled={example.disabled}>
            <SelectTrigger className={example.className}>
              <SelectValue placeholder={example.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {example.children}
            </SelectContent>
          </Select>
          {example.description && (
            <p className="text-sm text-brand-error">{example.description}</p>
          )}
        </div>
      ))}
    </FormGrid>
  );

  return (
    <ShowcaseCard 
      title="Selection Controls" 
      description="Checkboxes, radio buttons, and select dropdowns"
    >
      <div className="space-y-8">
        {/* Checkboxes */}
        <div>
          <h4 className="mb-4">Checkboxes</h4>
          {renderCheckboxGrid()}
        </div>

        {/* Radio Buttons */}
        <div>
          <h4 className="mb-4">Radio Buttons</h4>
          <FormGrid columns={2}>
            <div>
              <Label className="mb-3 block">Default Radio Group</Label>
              <RadioGroup defaultValue="option2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="radio1" />
                  <Label htmlFor="radio1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="radio2" />
                  <Label htmlFor="radio2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="radio3" />
                  <Label htmlFor="radio3">Option 3</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-3 block text-muted-foreground">Disabled Radio Group</Label>
              <RadioGroup disabled>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled1" id="disabled1" />
                  <Label htmlFor="disabled1" className="text-muted-foreground">Disabled Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disabled2" id="disabled2" />
                  <Label htmlFor="disabled2" className="text-muted-foreground">Disabled Option 2</Label>
                </div>
              </RadioGroup>
            </div>
          </FormGrid>
        </div>

        {/* Basic Select Dropdowns */}
        <div>
          <h4 className="mb-4">Select Dropdowns</h4>
          {renderSelectGrid(selectExamples)}
        </div>

        {/* Advanced Select Dropdowns */}
        <div>
          <h4 className="mb-4">Advanced Select Options</h4>
          {renderSelectGrid(advancedSelectExamples, 2)}
        </div>

        {/* Size Variants */}
        <div>
          <h4 className="mb-4">Size Variants</h4>
          <div className="space-y-3 max-w-sm">
            <div className="space-y-2">
              <Label>Small Select</Label>
              <Select>
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue placeholder="Small select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small1">Small Option 1</SelectItem>
                  <SelectItem value="small2">Small Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Large Select</Label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Large select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="large1">Large Option 1</SelectItem>
                  <SelectItem value="large2">Large Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
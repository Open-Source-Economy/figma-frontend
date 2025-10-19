import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { FormField } from '../forms/FormField';
import { FormGrid } from '../forms/FormGrid';
import { InputWithAddon } from '../forms/InputWithAddon';
import { InputWithIcon } from '../forms/InputWithIcon';
import { CurrencyInput } from '../forms/CurrencyInput';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Search } from 'lucide-react';

interface AddonExample {
  label: string;
  description: string;
  component: React.ReactNode;
}

export function InputAddonShowcase() {
  const hoursExamples: AddonExample[] = [
    {
      label: "Attached Addon",
      description: "Visually connected, clear separation",
      component: (
        <InputWithAddon
          type="number"
          placeholder="40"
          suffix="hours/week"
          min="1"
          max="168"
        />
      )
    },
    {
      label: "Separate Text",
      description: "Simple, flexible, can accommodate longer text",
      component: (
        <div className="flex items-center gap-2">
          <Input 
            type="number" 
            placeholder="40"
            className="w-20"
            min="1"
            max="168"
          />
          <span className="text-sm text-muted-foreground">hours per week</span>
        </div>
      )
    }
  ];

  const currencyExamples: AddonExample[] = [
    {
      label: "With Quick Amounts",
      description: "Preset common values",
      component: (
        <CurrencyInput
          currency="usd"
          value="50"
          quickAmounts={[25, 50, 75, 100]}
        />
      )
    },
    {
      label: "With Range Indicator",
      description: "Shows market position",
      component: (
        <CurrencyInput
          currency="usd"
          value="85"
          showRangeIndicator
          currentValue={85}
          rangeMin={60}
          rangeMax={120}
        />
      )
    }
  ];

  const otherExamples: AddonExample[] = [
    {
      label: "Currency Prefix & Suffix",
      description: "Multi-part addon",
      component: (
        <InputWithAddon
          type="number"
          placeholder="100"
          prefix="$"
          suffix="USD"
          step="0.01"
        />
      )
    },
    {
      label: "Weight with Unit",
      description: "Right icon as unit",
      component: (
        <InputWithIcon
          type="number"
          placeholder="70"
          rightIcon={() => <span className="text-sm">kg</span>}
        />
      )
    },
    {
      label: "Percentage",
      description: "Constrained range input",
      component: (
        <InputWithIcon
          type="number"
          placeholder="75"
          min="0"
          max="100"
          rightIcon={() => <span className="text-sm">%</span>}
        />
      )
    },
    {
      label: "Search with Action",
      description: "Input with button",
      component: (
        <div className="flex">
          <InputWithIcon
            placeholder="Search..."
            leftIcon={Search}
            className="rounded-r-none border-r-0 flex-1"
          />
          <Button className="rounded-l-none">Search</Button>
        </div>
      )
    },
    {
      label: "URL with Protocol",
      description: "Protocol prefix",
      component: (
        <InputWithAddon
          placeholder="example.com"
          prefix="https://"
        />
      )
    },
    {
      label: "Temperature",
      description: "Unit toggle",
      component: (
        <div className="flex items-center gap-2">
          <Input 
            type="number" 
            placeholder="25"
            className="w-20"
          />
          <ToggleGroup type="single" defaultValue="celsius" size="sm">
            <ToggleGroupItem value="celsius" className="text-xs">°C</ToggleGroupItem>
            <ToggleGroupItem value="fahrenheit" className="text-xs">°F</ToggleGroupItem>
          </ToggleGroup>
        </div>
      )
    }
  ];

  const renderExampleGrid = (examples: AddonExample[], columns: number = 2) => (
    <FormGrid columns={columns}>
      {examples.map((example, index) => (
        <FormField 
          key={index}
          label={example.label}
          description={example.description}
        >
          {example.component}
        </FormField>
      ))}
    </FormGrid>
  );

  return (
    <ShowcaseCard 
      title="Input Addons & Suffixes" 
      description="Different ways to add contextual text, units, or actions to inputs"
    >
      <div className="space-y-8">
        {/* Hours per week examples */}
        <div>
          <h4 className="mb-4">Hours per Week Examples</h4>
          {renderExampleGrid(hoursExamples)}
        </div>

        {/* Currency Examples */}
        <div>
          <h4 className="mb-4">Hourly Rate with Currency Examples</h4>
          <FormField 
            label="Currency Select + Input" 
            description="Flexible currency selection"
          >
            <CurrencyInput
              currency="usd"
              placeholder="75"
            />
          </FormField>

          <div className="mt-8">
            <h5 className="mb-4">Interactive Features</h5>
            {renderExampleGrid(currencyExamples)}
          </div>
        </div>

        {/* Other common patterns */}
        <div>
          <h4 className="mb-4">Other Common Addon Patterns</h4>
          {renderExampleGrid(otherExamples, 3)}
        </div>
      </div>
    </ShowcaseCard>
  );
}
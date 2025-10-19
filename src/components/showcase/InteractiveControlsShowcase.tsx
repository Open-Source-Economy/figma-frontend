import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import { Toggle } from '../ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Label } from '../ui/label';
import { Typography } from '../ui/typography';
import { useFormState } from '../../hooks/useFormState';

export function InteractiveControlsShowcase() {
  const { formValues, updateField } = useFormState();

  return (
    <ShowcaseCard 
      title="Interactive Controls" 
      description="Switches, sliders, toggles, and advanced controls"
    >
      <div className="space-y-8">
        {/* Switches */}
        <div>
          <Typography.H4>Switches</Typography.H4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="switch-default" 
                checked={formValues.switch}
                onCheckedChange={(checked) => updateField('switch', checked)}
              />
              <Label htmlFor="switch-default">Default Switch</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-checked" checked />
              <Label htmlFor="switch-checked">Checked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-disabled" disabled />
              <Label htmlFor="switch-disabled" className="text-muted-foreground">Disabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-disabled-checked" disabled checked />
              <Label htmlFor="switch-disabled-checked" className="text-muted-foreground">Disabled Checked</Label>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div>
          <Typography.H4>Sliders</Typography.H4>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Default Slider (Value: {formValues.slider[0]})</Label>
              <Slider
                value={formValues.slider}
                onValueChange={(value) => updateField('slider', value)}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Range Slider</Label>
                <Slider
                  defaultValue={[20, 80]}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Disabled Slider</Label>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Groups */}
        <div>
          <Typography.H4>Toggle Groups</Typography.H4>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Single Toggle Group</Label>
              <ToggleGroup type="single" defaultValue="center">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="space-y-2">
              <Label>Multiple Toggle Group</Label>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground">Disabled Toggle Group</Label>
              <ToggleGroup type="single" disabled>
                <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
                <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
                <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>

        {/* Individual Toggles */}
        <div>
          <Typography.H4>Individual Toggles</Typography.H4>
          <div className="flex flex-wrap gap-4">
            <Toggle 
              pressed={formValues.toggle}
              onPressedChange={(pressed) => updateField('toggle', pressed)}
            >
              Toggle Me
            </Toggle>
            <Toggle pressed>
              Pressed
            </Toggle>
            <Toggle disabled>
              Disabled
            </Toggle>
            <Toggle disabled pressed>
              Disabled Pressed
            </Toggle>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
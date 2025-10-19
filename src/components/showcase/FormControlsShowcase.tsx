import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { SectionHeader } from '../ui/section-header';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function FormControlsShowcase() {
  const [checkboxStates, setCheckboxStates] = useState({
    default: false,
    outline: false,
    filled: false,
    ghost: false,
    success: true,
    error: false,
    warning: false,
  });

  const [radioValue, setRadioValue] = useState('default');
  const [switchStates, setSwitchStates] = useState({
    default: false,
    outline: false,
    filled: false,
    ghost: false,
    success: true,
    error: false,
    warning: false,
  });

  const [sliderValues, setSliderValues] = useState({
    default: [50],
    outline: [30],
    filled: [70],
    ghost: [25],
    success: [80],
    error: [20],
    warning: [60],
  });

  const handleCheckboxChange = (variant: string) => (checked: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [variant]: checked }));
  };

  const handleSwitchChange = (variant: string) => (checked: boolean) => {
    setSwitchStates(prev => ({ ...prev, [variant]: checked }));
  };

  const handleSliderChange = (variant: string) => (value: number[]) => {
    setSliderValues(prev => ({ ...prev, [variant]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Design System
          </Badge>
          <SectionHeader
            title="Form Controls Design System"
            subtitle="Consistent blue-to-green gradient styling across all form components"
            description="Experience our unified form control system featuring the Open Source Economy brand colors with sophisticated hover states, focus effects, and validation styles."
          />
        </div>

        <div className="grid gap-12">
          {/* Checkbox Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Checkbox Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">Standard Variants</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-default"
                      variant="default"
                      checked={checkboxStates.default}
                      onCheckedChange={handleCheckboxChange('default')}
                    />
                    <Label htmlFor="checkbox-default">Default Checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-outline"
                      variant="outline"
                      checked={checkboxStates.outline}
                      onCheckedChange={handleCheckboxChange('outline')}
                    />
                    <Label htmlFor="checkbox-outline">Outline Checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-filled"
                      variant="filled"
                      checked={checkboxStates.filled}
                      onCheckedChange={handleCheckboxChange('filled')}
                    />
                    <Label htmlFor="checkbox-filled">Filled Checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-ghost"
                      variant="ghost"
                      checked={checkboxStates.ghost}
                      onCheckedChange={handleCheckboxChange('ghost')}
                    />
                    <Label htmlFor="checkbox-ghost">Ghost Checkbox</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">State Variants</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-success"
                      variant="success"
                      checked={checkboxStates.success}
                      onCheckedChange={handleCheckboxChange('success')}
                    />
                    <Label htmlFor="checkbox-success">Success State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-error"
                      variant="error"
                      checked={checkboxStates.error}
                      onCheckedChange={handleCheckboxChange('error')}
                    />
                    <Label htmlFor="checkbox-error">Error State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-warning"
                      variant="warning"
                      checked={checkboxStates.warning}
                      onCheckedChange={handleCheckboxChange('warning')}
                    />
                    <Label htmlFor="checkbox-warning">Warning State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="checkbox-disabled"
                      variant="default"
                      disabled
                    />
                    <Label htmlFor="checkbox-disabled">Disabled State</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">Size Variants</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="checkbox-sm" size="sm" defaultChecked />
                    <Label htmlFor="checkbox-sm">Small Checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="checkbox-default-size" size="default" defaultChecked />
                    <Label htmlFor="checkbox-default-size">Default Size</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="checkbox-lg" size="lg" defaultChecked />
                    <Label htmlFor="checkbox-lg">Large Checkbox</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox id="checkbox-xl" size="xl" defaultChecked />
                    <Label htmlFor="checkbox-xl">Extra Large</Label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Radio Group Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Radio Group Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">Standard Variants</h4>
                <RadioGroup value={radioValue} onValueChange={setRadioValue} variant="default">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="default" id="radio-default" />
                    <Label htmlFor="radio-default">Default Radio</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option2" id="radio-option2" />
                    <Label htmlFor="radio-option2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">Outline Variant</h4>
                <RadioGroup defaultValue="outline1" variant="outline">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="outline1" id="radio-outline1" />
                    <Label htmlFor="radio-outline1">Outline Radio</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="outline2" id="radio-outline2" />
                    <Label htmlFor="radio-outline2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">State Examples</h4>
                <RadioGroup defaultValue="success1" variant="success">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="success1" id="radio-success1" />
                    <Label htmlFor="radio-success1">Success State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="success2" id="radio-success2" />
                    <Label htmlFor="radio-success2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-lg font-medium text-brand-accent mb-4">Small Size</h4>
                <RadioGroup defaultValue="sm1" size="sm">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="sm1" id="radio-sm1" />
                    <Label htmlFor="radio-sm1">Small</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-accent mb-4">Default Size</h4>
                <RadioGroup defaultValue="def1" size="default">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="def1" id="radio-def1" />
                    <Label htmlFor="radio-def1">Default</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-accent mb-4">Large Size</h4>
                <RadioGroup defaultValue="lg1" size="lg">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="lg1" id="radio-lg1" />
                    <Label htmlFor="radio-lg1">Large</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <h4 className="text-lg font-medium text-brand-accent mb-4">Extra Large</h4>
                <RadioGroup defaultValue="xl1" size="xl">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="xl1" id="radio-xl1" />
                    <Label htmlFor="radio-xl1">Extra Large</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </section>

          {/* Switch Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Switch Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">Standard Variants</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-default"
                      variant="default"
                      checked={switchStates.default}
                      onCheckedChange={handleSwitchChange('default')}
                    />
                    <Label htmlFor="switch-default">Default Switch</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-outline"
                      variant="outline"
                      checked={switchStates.outline}
                      onCheckedChange={handleSwitchChange('outline')}
                    />
                    <Label htmlFor="switch-outline">Outline Switch</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-filled"
                      variant="filled"
                      checked={switchStates.filled}
                      onCheckedChange={handleSwitchChange('filled')}
                    />
                    <Label htmlFor="switch-filled">Filled Switch</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-ghost"
                      variant="ghost"
                      checked={switchStates.ghost}
                      onCheckedChange={handleSwitchChange('ghost')}
                    />
                    <Label htmlFor="switch-ghost">Ghost Switch</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">State Variants</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-success"
                      variant="success"
                      checked={switchStates.success}
                      onCheckedChange={handleSwitchChange('success')}
                    />
                    <Label htmlFor="switch-success">Success State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-error"
                      variant="error"
                      checked={switchStates.error}
                      onCheckedChange={handleSwitchChange('error')}
                    />
                    <Label htmlFor="switch-error">Error State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch 
                      id="switch-warning"
                      variant="warning"
                      checked={switchStates.warning}
                      onCheckedChange={handleSwitchChange('warning')}
                    />
                    <Label htmlFor="switch-warning">Warning State</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch id="switch-disabled" disabled />
                    <Label htmlFor="switch-disabled">Disabled State</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-medium text-brand-accent">Size Variants</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Switch id="switch-sm" size="sm" defaultChecked />
                    <Label htmlFor="switch-sm">Small Switch</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch id="switch-default-size" size="default" defaultChecked />
                    <Label htmlFor="switch-default-size">Default Size</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch id="switch-lg" size="lg" defaultChecked />
                    <Label htmlFor="switch-lg">Large Switch</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Switch id="switch-xl" size="xl" defaultChecked />
                    <Label htmlFor="switch-xl">Extra Large</Label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Slider Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Slider Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label>Default Slider</Label>
                  <Slider
                    variant="default"
                    value={sliderValues.default}
                    onValueChange={handleSliderChange('default')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.default[0]}</p>
                </div>

                <div className="space-y-4">
                  <Label>Outline Slider</Label>
                  <Slider
                    variant="outline"
                    value={sliderValues.outline}
                    onValueChange={handleSliderChange('outline')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.outline[0]}</p>
                </div>

                <div className="space-y-4">
                  <Label>Filled Slider</Label>
                  <Slider
                    variant="filled"
                    value={sliderValues.filled}
                    onValueChange={handleSliderChange('filled')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.filled[0]}</p>
                </div>

                <div className="space-y-4">
                  <Label>Ghost Slider</Label>
                  <Slider
                    variant="ghost"
                    value={sliderValues.ghost}
                    onValueChange={handleSliderChange('ghost')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.ghost[0]}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <Label>Success Slider</Label>
                  <Slider
                    variant="success"
                    value={sliderValues.success}
                    onValueChange={handleSliderChange('success')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.success[0]}</p>
                </div>

                <div className="space-y-4">
                  <Label>Error Slider</Label>
                  <Slider
                    variant="error"
                    value={sliderValues.error}
                    onValueChange={handleSliderChange('error')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.error[0]}</p>
                </div>

                <div className="space-y-4">
                  <Label>Warning Slider</Label>
                  <Slider
                    variant="warning"
                    value={sliderValues.warning}
                    onValueChange={handleSliderChange('warning')}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Value: {sliderValues.warning[0]}</p>
                </div>

                <div className="space-y-4">
                  <Label>Disabled Slider</Label>
                  <Slider
                    disabled
                    defaultValue={[40]}
                    max={100}
                    step={1}
                  />
                  <p className="text-sm text-muted-foreground">Disabled state</p>
                </div>
              </div>
            </div>

            {/* Slider Sizes */}
            <div className="mt-12 space-y-8">
              <h4 className="text-lg font-medium text-brand-accent">Slider Sizes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <Label>Small</Label>
                  <Slider size="sm" defaultValue={[25]} />
                </div>
                <div className="space-y-3">
                  <Label>Default</Label>
                  <Slider size="default" defaultValue={[50]} />
                </div>
                <div className="space-y-3">
                  <Label>Large</Label>
                  <Slider size="lg" defaultValue={[75]} />
                </div>
                <div className="space-y-3">
                  <Label>Extra Large</Label>
                  <Slider size="xl" defaultValue={[90]} />
                </div>
              </div>
            </div>
          </section>

          {/* Combined Example */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Combined Form Example</h3>
            <div className="bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-success/5 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6">Project Settings</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label>Notification Preferences</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Checkbox id="email-notifications" variant="outline" defaultChecked />
                        <Label htmlFor="email-notifications">Email notifications</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="push-notifications" variant="outline" />
                        <Label htmlFor="push-notifications">Push notifications</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="sms-notifications" variant="outline" />
                        <Label htmlFor="sms-notifications">SMS notifications</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Project Visibility</Label>
                    <RadioGroup defaultValue="private" variant="filled">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="public" id="visibility-public" />
                        <Label htmlFor="visibility-public">Public</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="private" id="visibility-private" />
                        <Label htmlFor="visibility-private">Private</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="team" id="visibility-team" />
                        <Label htmlFor="visibility-team">Team only</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label>Feature Toggles</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-deploy">Auto-deployment</Label>
                        <Switch id="auto-deploy" variant="success" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="monitoring">Monitoring</Label>
                        <Switch id="monitoring" variant="outline" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="analytics">Analytics</Label>
                        <Switch id="analytics" variant="outline" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Resource Allocation</Label>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">CPU Usage</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Slider variant="success" defaultValue={[75]} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Memory Usage</span>
                          <span className="text-sm text-muted-foreground">60%</span>
                        </div>
                        <Slider variant="warning" defaultValue={[60]} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-end mt-8">
                <Button variant="outline">Reset</Button>
                <Button variant="default">Save Settings</Button>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center pt-8">
            <div className="bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-success/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-brand-primary">Consistent Design System</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                All form controls share the same variant system, ensuring consistency across your entire Open Source Economy platform with sophisticated gradient effects and state management.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="default">
                  Explore Components
                </Button>
                <Button variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
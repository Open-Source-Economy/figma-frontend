import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar as CalendarComponent } from '../ui/calendar';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Typography } from '../ui/typography';
import { Calendar } from 'lucide-react';
import { cn } from '../ui/utils';
import { useFormState } from '../../hooks/useFormState';

export function AdvancedInputShowcase() {
  const { formValues, updateField } = useFormState();
  const [date, setDate] = React.useState<Date>();

  return (
    <ShowcaseCard 
      title="Advanced Input Types" 
      description="Specialized input components for specific use cases"
    >
      <div className="space-y-8">
        {/* OTP Input */}
        <div>
          <h4 className="mb-4">OTP Input</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Default OTP</Label>
              <InputOTP maxLength={6} value={formValues.otp} onChange={(value) => updateField('otp', value)}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <div className="space-y-2">
              <Label>OTP with Separator</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <div className="text-muted-foreground">-</div>
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <h4 className="mb-4">Date Picker</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date Picker</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground">Disabled Date Picker</Label>
              <Button
                variant="outline"
                disabled
                className="w-full justify-start text-left font-normal text-muted-foreground"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Pick a date
              </Button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div>
          <h4 className="mb-4">Progress Indicators</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Progress Bar</Label>
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
              <Progress value={65} className="w-full" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-brand-success">Success Progress</Label>
                <span className="text-sm text-brand-success">100%</span>
              </div>
              <Progress value={100} className="w-full" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-brand-warning">Warning Progress</Label>
                <span className="text-sm text-brand-warning">25%</span>
              </div>
              <Progress value={25} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  );
}
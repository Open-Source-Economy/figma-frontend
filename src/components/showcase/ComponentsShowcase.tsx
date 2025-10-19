import React from 'react';
import { SectionLayout } from '../layout/SectionLayout';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';
import { ButtonShowcase } from './ButtonShowcase';
import { TableShowcase } from './TableShowcase';
import { FormField } from '../forms/FormField';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Label } from '../ui/label';

export function ComponentsShowcase() {
  return (
    <SectionLayout 
      title="Components"
      description="Our comprehensive component library built on shadcn/ui foundations with enhanced functionality."
      maxWidth="6xl"
    >
      <div className="grid gap-8">
        <ButtonShowcase />

        <ShowcaseCard 
          title="Form Elements" 
          description="Input fields and form controls"
        >
          <div className="space-y-6">
            <ShowcaseGrid columns={2}>
              <FormField label="Email">
                <Input type="email" placeholder="Enter your email" />
              </FormField>
              <FormField label="Password">
                <Input type="password" placeholder="Enter password" />
              </FormField>
            </ShowcaseGrid>
            <FormField label="Message">
              <Textarea 
                placeholder="Enter your message" 
                rows={2} 
                className="min-h-[60px] resize-y" 
              />
            </FormField>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard 
          title="Badges & Status" 
          description="Status indicators and labels"
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ShowcaseCard>

        <ShowcaseCard 
          title="Cards & Layout" 
          description="Card components for content organization"
        >
          <ShowcaseGrid columns={2}>
            <Card className="p-4">
              <h4 className="mb-2">Sample Card</h4>
              <p className="text-muted-foreground text-sm">
                This is a sample card component showcasing the default styling.
              </p>
            </Card>
            <Card className="p-4 border-brand-primary">
              <h4 className="mb-2">Highlighted Card</h4>
              <p className="text-muted-foreground text-sm">
                This card has custom border styling to highlight important content.
              </p>
            </Card>
          </ShowcaseGrid>
        </ShowcaseCard>

        <TableShowcase />
      </div>
    </SectionLayout>
  );
}
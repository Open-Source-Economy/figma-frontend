import React from 'react';
import { Typography } from '../ui/typography';
import { Card, CardContent, CardHeader } from '../ui/card';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';

export const TypographySystemShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Typography Components Overview */}
      <Card>
        <CardHeader>
          <Typography.H3>Typography Component System</Typography.H3>
          <Typography.Lead>
            Our DRY typography system uses React components to ensure consistent styling 
            across the entire application. No more custom classes or style overrides.
          </Typography.Lead>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Display Text */}
          <div>
            <Typography.H4>Display Text</Typography.H4>
            <Typography.BodySmall className="text-muted-foreground mb-4">
              For hero sections and major headings
            </Typography.BodySmall>
            <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
              <Typography.DisplayLarge>Display Large</Typography.DisplayLarge>
              <Typography.DisplayMedium>Display Medium</Typography.DisplayMedium>
              <Typography.DisplaySmall>Display Small</Typography.DisplaySmall>
            </div>
          </div>

          {/* Headlines */}
          <div>
            <Typography.H4>Headlines (H1-H6)</Typography.H4>
            <Typography.BodySmall className="text-muted-foreground mb-4">
              Semantic heading components with consistent hierarchy
            </Typography.BodySmall>
            <div className="space-y-3 p-6 bg-muted/30 rounded-lg">
              <Typography.H1>Heading 1 - Main Page Title</Typography.H1>
              <Typography.H2>Heading 2 - Section Title</Typography.H2>
              <Typography.H3>Heading 3 - Subsection Title</Typography.H3>
              <Typography.H4>Heading 4 - Content Title</Typography.H4>
              <Typography.H5>Heading 5 - Minor Title</Typography.H5>
              <Typography.H6>Heading 6 - Label Title</Typography.H6>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <Typography.H4>Body Text</Typography.H4>
            <Typography.BodySmall className="text-muted-foreground mb-4">
              For paragraphs and content text
            </Typography.BodySmall>
            <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
              <Typography.BodyLarge>
                Body Large - Used for prominent descriptions and lead paragraphs.
              </Typography.BodyLarge>
              <Typography.BodyMedium>
                Body Medium - The standard paragraph text for most content areas.
              </Typography.BodyMedium>
              <Typography.BodySmall>
                Body Small - For secondary information and supporting details.
              </Typography.BodySmall>
              <Typography.Lead>
                Lead text - Used for introduction paragraphs and highlighted content.
              </Typography.Lead>
            </div>
          </div>

          {/* Labels and Interactive Text */}
          <div>
            <Typography.H4>Labels and Interactive</Typography.H4>
            <Typography.BodySmall className="text-muted-foreground mb-4">
              For forms, buttons, and UI elements
            </Typography.BodySmall>
            <div className="space-y-3 p-6 bg-muted/30 rounded-lg">
              <Typography.LabelLarge>Label Large</Typography.LabelLarge>
              <Typography.LabelMedium>Label Medium</Typography.LabelMedium>
              <Typography.LabelSmall>Label Small</Typography.LabelSmall>
            </div>
          </div>

          {/* Special Purpose */}
          <div>
            <Typography.H4>Special Purpose</Typography.H4>
            <Typography.BodySmall className="text-muted-foreground mb-4">
              For specific use cases and emphasis
            </Typography.BodySmall>
            <div className="space-y-3 p-6 bg-muted/30 rounded-lg">
              <Typography.Caption>Caption text for images and annotations</Typography.Caption>
              <Typography.Overline>Overline text for categories</Typography.Overline>
              <Typography.Code>console.log('Code formatting')</Typography.Code>
              <Typography.Muted>Muted text for secondary information</Typography.Muted>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <Typography.H3>Usage Examples</Typography.H3>
          <Typography.Lead>
            See how the Typography components work in practice
          </Typography.Lead>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Article Example */}
          <div className="p-6 bg-muted/30 rounded-lg">
            <Typography.H2>Article Title Example</Typography.H2>
            <Typography.Caption className="block mb-4">Published on January 15, 2024</Typography.Caption>
            
            <Typography.Lead className="mb-6">
              This is a lead paragraph that introduces the main topic and captures the reader's attention.
            </Typography.Lead>
            
            <Typography.BodyMedium className="mb-4">
              This is a regular paragraph with standard body text. It provides detailed information about the topic 
              and maintains good readability with proper line height and spacing.
            </Typography.BodyMedium>
            
            <Typography.H3 className="mt-6">Subsection Heading</Typography.H3>
            <Typography.BodyMedium>
              Another paragraph with <Typography.Strong>bold emphasis</Typography.Strong> and 
              <Typography.Emphasis> italic text</Typography.Emphasis> to show how inline formatting works.
            </Typography.BodyMedium>
            
            <Typography.Blockquote className="my-6">
              "This is a blockquote demonstrating how quoted content appears with proper styling and emphasis."
            </Typography.Blockquote>
          </div>

          {/* Card Example */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Typography.H4>Feature Card</Typography.H4>
                <Typography.BodySmall className="text-muted-foreground">
                  Example of typography in a card component
                </Typography.BodySmall>
              </CardHeader>
              <CardContent>
                <Typography.BodyMedium>
                  This card demonstrates how our typography system maintains consistency 
                  across different component contexts.
                </Typography.BodyMedium>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Typography.H4>Stats Card</Typography.H4>
                <Typography.BodySmall className="text-muted-foreground">
                  Typography for data display
                </Typography.BodySmall>
              </CardHeader>
              <CardContent>
                <Typography.DisplaySmall className="text-brand-primary">2,847</Typography.DisplaySmall>
                <Typography.LabelMedium>Active Users</Typography.LabelMedium>
                <Typography.Caption>Updated 5 minutes ago</Typography.Caption>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <Typography.H3>Benefits of Component-Based Typography</Typography.H3>
        </CardHeader>
        <CardContent>
          <Typography.List>
            <Typography.ListItem>
              <Typography.Strong>DRY Principle:</Typography.Strong> Single source of truth for all typography styles
            </Typography.ListItem>
            <Typography.ListItem>
              <Typography.Strong>Type Safety:</Typography.Strong> TypeScript ensures correct props and prevents typos
            </Typography.ListItem>
            <Typography.ListItem>
              <Typography.Strong>Consistency:</Typography.Strong> Impossible to accidentally override styles
            </Typography.ListItem>
            <Typography.ListItem>
              <Typography.Strong>Maintainability:</Typography.Strong> Easy to update typography across entire app
            </Typography.ListItem>
            <Typography.ListItem>
              <Typography.Strong>Accessibility:</Typography.Strong> Semantic HTML with proper heading hierarchy
            </Typography.ListItem>
            <Typography.ListItem>
              <Typography.Strong>Developer Experience:</Typography.Strong> Clear component names and IntelliSense support
            </Typography.ListItem>
          </Typography.List>
        </CardContent>
      </Card>
    </div>
  );
};
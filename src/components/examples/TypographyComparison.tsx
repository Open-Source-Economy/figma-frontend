import React from 'react';
import { Typography } from '../ui/typography';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

export const TypographyComparison = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <Typography.H2>Before: Non-DRY Typography</Typography.H2>
          <Typography.Lead>
            Custom classes scattered throughout components, inconsistent styling
          </Typography.Lead>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-brand-error/30 bg-brand-error/10 rounded-lg">
            <Typography.Code className="block mb-2 text-brand-error">
              {'<h2 className="mb-4 text-2xl font-semibold">Section Title</h2>'}
            </Typography.Code>
            <Typography.Code className="block mb-2 text-brand-error">
              {'<h2 className="text-xl font-bold mb-6">Another Title</h2>'}
            </Typography.Code>
            <Typography.Code className="block mb-2 text-brand-error">
              {'<h2 className="text-lg font-medium mb-2">Different Style</h2>'}
            </Typography.Code>
            <Typography.BodySmall className="text-brand-error-dark mt-3">
              ❌ Problems: Inconsistent spacing, font sizes, weights. Hard to maintain.
            </Typography.BodySmall>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Typography.H2>After: DRY Typography System</Typography.H2>
          <Typography.Lead>
            Consistent components with built-in design system integration
          </Typography.Lead>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border border-brand-success/30 bg-brand-success/10 rounded-lg">
            <Typography.Code className="block mb-2 text-brand-success">
              {'<Typography.H2>Section Title</Typography.H2>'}
            </Typography.Code>
            <Typography.Code className="block mb-2 text-brand-success">
              {'<Typography.H2>Another Title</Typography.H2>'}
            </Typography.Code>
            <Typography.Code className="block mb-2 text-brand-success">
              {'<Typography.H2>Consistent Style</Typography.H2>'}
            </Typography.Code>
            <Typography.BodySmall className="text-brand-success-dark mt-3">
              ✅ Benefits: Consistent styling, easy maintenance, type safety, semantic HTML.
            </Typography.BodySmall>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Typography.H2>Real Example</Typography.H2>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div>
              <Badge variant="destructive" className="mb-4">Before (Non-DRY)</Badge>
              <div className="p-4 border rounded-lg space-y-3">
                <h2 className="text-2xl font-semibold mb-4">Product Features</h2>
                <h3 className="text-lg font-medium mb-2">Feature One</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Description with custom classes
                </p>
                <h3 className="text-xl font-bold mb-3">Feature Two</h3>
                <p className="text-muted-foreground text-base">
                  Inconsistent styling
                </p>
              </div>
            </div>

            {/* After */}
            <div>
              <Badge variant="default" className="mb-4">After (DRY)</Badge>
              <div className="p-4 border rounded-lg space-y-3">
                <Typography.H2>Product Features</Typography.H2>
                <Typography.H3>Feature One</Typography.H3>
                <Typography.BodySmall className="text-muted-foreground">
                  Description using typography system
                </Typography.BodySmall>
                <Typography.H3>Feature Two</Typography.H3>
                <Typography.BodyMedium className="text-muted-foreground">
                  Consistent styling everywhere
                </Typography.BodyMedium>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Typography } from '../ui/typography';
import { TypographySystemShowcase } from './TypographySystemShowcase';
import { Type, Palette, Zap } from 'lucide-react';

interface TypographyExampleProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  className?: string;
}

function TypographyExample({ title, description, children, code, className = "" }: TypographyExampleProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {title && (
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-medium">{title}</h5>
          {description && <span className="text-xs text-muted-foreground">{description}</span>}
        </div>
      )}
      <div className="p-4 bg-background border rounded-lg">
        {children}
      </div>
      <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded font-mono">
        {code}
      </code>
    </div>
  );
}

export function TypographyShowcase() {
  return (
    <div className="space-y-12">
      {/* New Typography Component System */}
      <TypographySystemShowcase />
      
      {/* Separator */}
      <Separator />
      
      {/* Original Typography Examples */}
      <div className="space-y-8">
      {/* Typography Overview */}
      <Card className="border-brand-primary/20 bg-brand-primary/5">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Type className="text-white" size={24} />
            </div>
            <h3 className="mb-2">Professional Typography System</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive typography system provides consistent, accessible, and beautiful text styling 
              across all components. Built with semantic hierarchy and optimized for readability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-2xl font-bold text-brand-primary mb-1">9</div>
              <div className="text-sm text-muted-foreground">Font Sizes</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-2xl font-bold text-brand-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Line Heights</div>
            </div>
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="text-2xl font-bold text-brand-primary mb-1">9</div>
              <div className="text-sm text-muted-foreground">Font Weights</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Display Typography */}
      <ShowcaseCard 
        title="Display Typography" 
        description="Large, impactful text for hero sections and major headings"
      >
        <div className="space-y-6">
          <TypographyExample 
            title="Display Large"
            description="Hero headlines, landing pages"
            code='<h1 className="text-display-large">...'
          >
            <h1 className="text-display-large">Display Large Text</h1>
          </TypographyExample>
          
          <TypographyExample 
            title="Display Medium"
            description="Section heroes, feature highlights"
            code='<h1 className="text-display-medium">...'
          >
            <h1 className="text-display-medium">Display Medium Text</h1>
          </TypographyExample>
          
          <TypographyExample 
            title="Display Small"
            description="Card headers, modal titles"
            code='<h2 className="text-display-small">...'
          >
            <h2 className="text-display-small">Display Small Text</h2>
          </TypographyExample>
        </div>
      </ShowcaseCard>

      {/* Headline Typography */}
      <ShowcaseCard 
        title="Headlines" 
        description="Semantic heading hierarchy for content structure"
      >
        <div className="space-y-6">
          <TypographyExample 
            title="Headline Large (H1)"
            description="Page titles, main headings"
            code="<h1>..."
          >
            <h1>The Future of Open Source</h1>
          </TypographyExample>
          
          <TypographyExample 
            title="Headline Medium (H2)"
            description="Section titles, content blocks"
            code="<h2>..."
          >
            <h2>Building Sustainable Communities</h2>
          </TypographyExample>
          
          <TypographyExample 
            title="Headline Small (H3)"
            description="Subsection titles, components"
            code="<h3>..."
          >
            <h3>Developer Experience First</h3>
          </TypographyExample>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TypographyExample 
              title="H4 Heading"
              description="Component titles"
              code="<h4>..."
            >
              <h4>Technical Architecture</h4>
            </TypographyExample>
            
            <TypographyExample 
              title="H5 Heading"
              description="Sub-component titles"
              code="<h5>..."
            >
              <h5>Implementation Details</h5>
            </TypographyExample>
          </div>
          
          <TypographyExample 
            title="H6 Overline Heading"
            description="Category labels, tags"
            code="<h6>..."
          >
            <h6>Technical Specification</h6>
          </TypographyExample>
        </div>
      </ShowcaseCard>

      {/* Body Typography */}
      <ShowcaseCard 
        title="Body Text" 
        description="Readable text for content and interface elements"
      >
        <div className="space-y-6">
          <TypographyExample 
            title="Lead Text"
            description="Introduction paragraphs, important text"
            code='<p className="text-lead">...'
          >
            <p className="text-lead">
              This is lead text that introduces important concepts and draws attention to key information. 
              It's slightly larger and has a different color to create visual hierarchy.
            </p>
          </TypographyExample>
          
          <TypographyExample 
            title="Body Large"
            description="Prominent body text"
            code='<p className="text-body-large">...'
          >
            <p className="text-body-large">
              Large body text is perfect for important content blocks that need more visual weight 
              while remaining highly readable. Ideal for feature descriptions and key explanations.
            </p>
          </TypographyExample>
          
          <TypographyExample 
            title="Body Medium (Default)"
            description="Standard paragraph text"
            code="<p>..."
          >
            <p>
              This is standard paragraph text that forms the backbone of content. It's optimized for 
              readability with proper line height and spacing. Perfect for articles, descriptions, 
              and general content where clarity is essential.
            </p>
          </TypographyExample>
          
          <TypographyExample 
            title="Body Small"
            description="Secondary content, captions"
            code='<p className="text-body-small">...'
          >
            <p className="text-body-small">
              Small body text is useful for secondary information, helper text, and situations where 
              space is limited but readability is still important. Often used in sidebars and footnotes.
            </p>
          </TypographyExample>
        </div>
      </ShowcaseCard>

      {/* Utility Typography */}
      <ShowcaseCard 
        title="Utility Text Styles" 
        description="Special purpose text styles for labels, captions, and emphasis"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TypographyExample 
              title="Label Large"
              description="Form labels, buttons"
              code='<span className="text-label-large">...'
            >
              <span className="text-label-large">Email Address</span>
            </TypographyExample>
            
            <TypographyExample 
              title="Label Medium"
              description="Input labels, menu items"
              code='<span className="text-label-medium">...'
            >
              <span className="text-label-medium">Username</span>
            </TypographyExample>
            
            <TypographyExample 
              title="Label Small"
              description="Badges, tags, meta information"
              code='<span className="text-label-small">...'
            >
              <span className="text-label-small">REQUIRED</span>
            </TypographyExample>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TypographyExample 
              title="Caption Text"
              description="Image captions, helper text"
              code='<span className="text-caption">...'
            >
              <span className="text-caption">
                This is caption text used for additional context and helper information.
              </span>
            </TypographyExample>
            
            <TypographyExample 
              title="Overline Text"
              description="Category labels, section markers"
              code='<span className="text-overline">...'
            >
              <span className="text-overline">Category Label</span>
            </TypographyExample>
          </div>
          
          <TypographyExample 
            title="Code Text"
            description="Inline code, technical terms"
            code='<code className="text-code">...'
          >
            <p>
              Use the <code className="text-code">useState</code> hook to manage component state, 
              or implement <code className="text-code">useEffect</code> for side effects.
            </p>
          </TypographyExample>
        </div>
      </ShowcaseCard>

      {/* Semantic Colors */}
      <ShowcaseCard 
        title="Semantic Text Colors" 
        description="Contextual text colors for status and emphasis"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <TypographyExample 
              title="Primary Emphasis"
              description="Brand highlighting, CTAs"
              code='<span className="text-primary-emphasis">...'
            >
              <span className="text-primary-emphasis">Primary highlighted text</span>
            </TypographyExample>
            
            <TypographyExample 
              title="Success Emphasis"
              description="Positive feedback, confirmations"
              code='<span className="text-success-emphasis">...'
            >
              <span className="text-success-emphasis">Success message text</span>
            </TypographyExample>
          </div>
          
          <div className="space-y-4">
            <TypographyExample 
              title="Warning Emphasis"
              description="Cautions, important notices"
              code='<span className="text-warning-emphasis">...'
            >
              <span className="text-warning-emphasis">Warning message text</span>
            </TypographyExample>
            
            <TypographyExample 
              title="Error Emphasis"
              description="Error states, critical alerts"
              code='<span className="text-error-emphasis">...'
            >
              <span className="text-error-emphasis">Error message text</span>
            </TypographyExample>
          </div>
        </div>
      </ShowcaseCard>

      {/* Reading Width and Text Formatting */}
      <ShowcaseCard 
        title="Text Formatting & Readability" 
        description="Utilities for optimal reading experience"
      >
        <div className="space-y-6">
          <TypographyExample 
            title="Readable Width"
            description="Optimal line length for reading"
            code='<p className="text-readable">...'
          >
            <p className="text-readable">
              This paragraph uses the readable width utility to constrain line length to an optimal 
              65 characters. This improves readability by preventing lines from becoming too long, 
              which can make text difficult to follow. The constraint helps maintain good typography 
              principles across different screen sizes.
            </p>
          </TypographyExample>
          
          <TypographyExample 
            title="Text Balance"
            description="Balanced line breaks for headlines"
            code='<h2 className="text-balance">...'
          >
            <h2 className="text-balance text-headline-large">
              This headline uses text balance for better line breaking across multiple lines
            </h2>
          </TypographyExample>
          
          <TypographyExample 
            title="Lists and Structure"
            description="Formatted lists with proper spacing"
            code="<ul>..."
          >
            <div>
              <h4 className="mb-3">Key Features</h4>
              <ul className="space-y-1">
                <li>Comprehensive typography scale</li>
                <li>Semantic color system</li>
                <li>Responsive design patterns</li>
                <li>Accessibility-first approach</li>
              </ul>
            </div>
          </TypographyExample>
        </div>
      </ShowcaseCard>

      {/* Interactive Elements */}
      <ShowcaseCard 
        title="Interactive Elements" 
        description="Typography for buttons, labels, and form elements"
      >
        <div className="space-y-6">
          <div>
            <h4 className="mb-4">Form Elements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <p className="text-caption">Enter your primary email address</p>
              </div>
              <div className="space-y-2">
                <Label>Password</Label>
                <p className="text-caption">Must be at least 8 characters</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Buttons and Actions</h4>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
              <Button variant="ghost">Tertiary Action</Button>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4">Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </div>
      </ShowcaseCard>

      {/* Typography Guidelines */}
      <ShowcaseCard 
        title="Typography Guidelines" 
        description="Best practices for using our typography system"
        variant="full"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Type size={16} className="text-brand-primary" />
                  Hierarchy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">Use semantic HTML elements (h1-h6) for proper content structure</p>
                <p className="text-sm">Maintain consistent visual hierarchy throughout your interface</p>
                <p className="text-sm">Limit heading levels to improve content organization</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette size={16} className="text-brand-primary" />
                  Contrast
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">Ensure sufficient color contrast for accessibility</p>
                <p className="text-sm">Use muted colors for secondary information</p>
                <p className="text-sm">Test readability in both light and dark modes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap size={16} className="text-brand-primary" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">Use system fonts for optimal loading performance</p>
                <p className="text-sm">Avoid excessive font weight variations</p>
                <p className="text-sm">Consider font-display: swap for custom fonts</p>
              </CardContent>
            </Card>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="mb-3">Typography Scale Usage</h4>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm mb-3">
                <strong>Do:</strong> Use the predefined typography utilities for consistency
              </p>
              <code className="text-xs bg-background p-2 rounded block mb-3">
                {'<h1 className="text-headline-large">Page Title</h1>'}
              </code>
              <p className="text-sm mb-3">
                <strong>Don't:</strong> Override with arbitrary font sizes
              </p>
              <code className="text-xs bg-background p-2 rounded block opacity-60">
                {'<h1 style={{fontSize: "32px"}}>Page Title</h1>'}
              </code>
            </div>
          </div>
        </div>
      </ShowcaseCard>
      </div>
    </div>
  );
}
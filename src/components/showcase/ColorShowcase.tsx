import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';
import { Logo } from '../brand/Logo';

// Helper function to show consolidation info
function getConsolidationInfo(className: string): string | null {
  const consolidations: Record<string, string> = {
    'bg-primary': '✅ REPLACED: Now use bg-brand-primary directly',
    'bg-secondary': '✅ REPLACED: Now use bg-brand-secondary directly', 
    'bg-accent': '✅ REPLACED: Now use bg-brand-accent directly',
    'bg-brand-accent': '🎯 Source of truth (purple accent)',
    'bg-brand-primary': '🎯 Source of truth (navy primary)',
    'bg-brand-accent-dark': '🎯 Source of truth (dark purple variant)'
  };
  
  return consolidations[className] || null;
}

// Helper function to get REAL usage examples from actual codebase
function getRealUsageExamples(className: string): string {
  const usageMap: Record<string, string> = {
    // Purple Accent Colors - BRAND SOURCE OF TRUTH
    'bg-brand-accent': '🎯 PRIMARY PURPLE: HowItWorksAlternatives cards, FundAllocation icons, HowItWorksSecurity highlights',
    'bg-brand-accent-light': 'Light purple variations, Hover states',
    'bg-brand-accent-dark': '🎯 ACCENT PURPLE: Deep purple accents, System accent color source',
    
    // Navy Primary Colors - BRAND SOURCE OF TRUTH
    'bg-brand-primary': '🎯 PRIMARY NAVY: HeroSection badge dots, HowItWorksHero backgrounds, Service buttons, Chat avatars',
    'bg-brand-primary-light': 'Medium navy variations, Lighter navy elements',
    'bg-brand-primary-dark': 'Deep navy backgrounds, Rich navy containers',
    
    // Deep Dark Secondary Colors - BRAND SOURCE OF TRUTH
    'bg-brand-secondary': '🎯 FOUNDATION: Deep dark backgrounds, App foundation, System background source',
    'bg-brand-secondary-light': 'Medium dark sections, Content areas',
    'bg-brand-secondary-dark': 'Ultra-deep backgrounds, Maximum depth',
    
    // Coral Highlight Colors
    'bg-brand-highlight': 'HowItWorksComparison bullets, LogoCloud status dots, ExpertMaintainers indicators, Live chat avatars',
    'bg-brand-highlight-light': 'Light coral decorative elements',
    'bg-brand-highlight-dark': 'Deep coral highlights, Expert profile accents',
    
    // Success Colors
    'bg-brand-success': 'Security certification badges, Live dashboard status, SLA uptime metrics, Active project indicators',
    'bg-brand-success-light': 'Success light backgrounds, Positive states',
    'bg-brand-success-dark': 'Dark success elements, Deep confirmation states',
    
    // Warning Colors
    'bg-brand-warning': 'Warning alerts, Caution indicators',
    'bg-brand-warning-light': 'Warning light backgrounds, Attention states',
    'bg-brand-warning-dark': 'Critical warning elements, Alert borders',
    
    // Error Colors
    'bg-brand-error': 'Error states, Destructive action buttons',
    'bg-brand-error-light': 'Error light backgrounds, Validation feedback',
    'bg-brand-error-dark': 'Critical error states, Failed indicators',
    
    // Neutral Scale
    'bg-brand-neutral-50': 'Ultra-deep app foundation, Maximum dark',
    'bg-brand-neutral-100': 'Deep section backgrounds, Dark containers',
    'bg-brand-neutral-200': 'Card backgrounds, Primary containers, System muted source',
    'bg-brand-neutral-300': 'Borders, Dividers, Disabled states, System border source',
    'bg-brand-neutral-400': 'Subtle borders, Medium elements',
    'bg-brand-neutral-500': 'Placeholder colors, Icon backgrounds',
    'bg-brand-neutral-600': 'Secondary text colors, Descriptions, System muted-foreground source',
    'bg-brand-neutral-700': 'Body text colors, Content text',
    'bg-brand-neutral-800': 'Heading colors, Emphasis text',
    'bg-brand-neutral-900': 'Primary text, High contrast content, System foreground source',
    'bg-brand-neutral-950': 'Maximum contrast text, Critical content',
    
    // System Colors - MAPPED TO BRAND COLORS
    'bg-primary': '📍 REPLACED: Now use bg-brand-primary directly',
    'bg-secondary': '📍 REPLACED: Now use bg-brand-secondary directly',
    'bg-accent': '📍 REPLACED: Now use bg-brand-accent directly',
    'bg-muted': '📍 MAPPED: References bg-brand-neutral-200 for consistency'
  };
  
  return usageMap[className] || 'Component styling, Design elements';
}

interface ColorSwatchProps {
  color: string;
  name: string;
  className: string;
}

function ColorSwatch({ color, name, className }: ColorSwatchProps) {
  return (
    <div className="text-center">
      <div className={`w-full h-20 ${className} rounded-lg mb-2 border`}></div>
      <p className="text-sm">{name}</p>
      <code className="text-xs text-muted-foreground">{className}</code>
      {/* Real Usage Examples */}
      <div className="mt-2 text-xs text-muted-foreground">
        {getRealUsageExamples(className)}
      </div>
      {/* Show consolidation status */}
      {getConsolidationInfo(className) && (
        <div className="mt-1 px-2 py-1 bg-brand-success/10 rounded text-xs text-brand-success border border-brand-success/20">
          {getConsolidationInfo(className)}
        </div>
      )}
    </div>
  );
}

interface LogoVariantProps {
  variant: 'primary' | 'secondary' | 'accent' | 'white' | 'dark';
  name: string;
  background?: string;
  textColor?: string;
}

function LogoVariant({ variant, name, background = 'bg-background', textColor = 'text-foreground' }: LogoVariantProps) {
  return (
    <div className={`text-center p-4 ${background} rounded-lg border`}>
      <Logo size="md" variant={variant} />
      <p className={`text-sm mt-2 ${textColor}`}>{name}</p>
      <code className={`text-xs ${variant === 'white' ? 'text-brand-neutral-300' : 'text-muted-foreground'}`}>
        variant="{variant}"
      </code>
    </div>
  );
}

export function ColorShowcase() {
  const brandPrimaryColors = [
    { name: 'Brand Primary', className: 'bg-brand-primary' },
    { name: 'Primary Light', className: 'bg-brand-primary-light' },
    { name: 'Primary Dark', className: 'bg-brand-primary-dark' }
  ];

  const brandSecondaryColors = [
    { name: 'Brand Secondary', className: 'bg-brand-secondary' },
    { name: 'Secondary Light', className: 'bg-brand-secondary-light' },
    { name: 'Secondary Dark', className: 'bg-brand-secondary-dark' }
  ];

  const brandAccentColors = [
    { name: 'Brand Accent', className: 'bg-brand-accent' },
    { name: 'Accent Light', className: 'bg-brand-accent-light' },
    { name: 'Accent Dark', className: 'bg-brand-accent-dark' }
  ];

  const brandHighlightColors = [
    { name: 'Brand Highlight', className: 'bg-brand-highlight' },
    { name: 'Highlight Light', className: 'bg-brand-highlight-light' },
    { name: 'Highlight Dark', className: 'bg-brand-highlight-dark' }
  ];

  const successColors = [
    { name: 'Success', className: 'bg-brand-success' },
    { name: 'Success Light', className: 'bg-brand-success-light' },
    { name: 'Success Dark', className: 'bg-brand-success-dark' }
  ];

  const warningColors = [
    { name: 'Warning', className: 'bg-brand-warning' },
    { name: 'Warning Light', className: 'bg-brand-warning-light' },
    { name: 'Warning Dark', className: 'bg-brand-warning-dark' }
  ];

  const errorColors = [
    { name: 'Error', className: 'bg-brand-error' },
    { name: 'Error Light', className: 'bg-brand-error-light' },
    { name: 'Error Dark', className: 'bg-brand-error-dark' }
  ];

  const systemColors = [
    { name: 'Primary', className: 'bg-brand-primary' },
    { name: 'Secondary', className: 'bg-brand-secondary' },
    { name: 'Accent', className: 'bg-brand-accent' },
    { name: 'Muted', className: 'bg-muted' }
  ];

  const neutralShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  return (
    <div className="space-y-8">
      {/* Logo Examples */}
      <ShowcaseCard 
        title="Logo Variants" 
        description="Different logo styles using brand colors"
      >
        <ShowcaseGrid columns={3}>
          <LogoVariant variant="primary" name="Primary" />
          <LogoVariant 
            variant="white" 
            name="White" 
            background="bg-brand-primary" 
            textColor="text-white" 
          />
          <LogoVariant variant="secondary" name="Secondary" background="bg-muted" />
          <LogoVariant variant="accent" name="Accent" />
          <LogoVariant variant="dark" name="Dark" />
          <div className="text-center p-4 bg-background rounded-lg border">
            <Logo size="lg" variant="primary" showText={false} />
            <p className="text-sm mt-2">Icon Only</p>
            <code className="text-xs text-muted-foreground">showText={false}</code>
          </div>
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Color Usage Guide */}
      <ShowcaseCard 
        title="Color System Guide" 
        description="Semantic usage guidelines for our premium dark color system"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-brand-accent rounded"></div>
                <h4 className="font-medium text-brand-accent">Purple (Accent)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Primary actions, buttons, links, focus states</p>
            </div>
            
            <div className="p-4 bg-brand-highlight/10 border border-brand-highlight/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-brand-highlight rounded"></div>
                <h4 className="font-medium text-brand-highlight">Coral (Highlight)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Secondary accents, status indicators, decorative</p>
            </div>
            
            <div className="p-4 bg-brand-success/10 border border-brand-success/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-brand-success rounded"></div>
                <h4 className="font-medium text-brand-success">Green (Success)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Success states, confirmations, positive feedback</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-brand-warning/10 border border-brand-warning/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-brand-warning rounded"></div>
                <h4 className="font-medium text-brand-warning">Amber (Warning)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Warnings, cautions, attention-needed states</p>
            </div>
            
            <div className="p-4 bg-brand-error/10 border border-brand-error/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-brand-error rounded"></div>
                <h4 className="font-medium text-brand-error">Red (Error)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Errors, destructive actions, critical alerts</p>
            </div>
            
            <div className="p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-brand-primary rounded"></div>
                <h4 className="font-medium text-brand-primary">Navy (Foundation)</h4>
              </div>
              <p className="text-sm text-muted-foreground">Backgrounds, containers, subtle elements</p>
            </div>
          </div>
        </div>
      </ShowcaseCard>

      {/* Brand Primary Colors */}
      <ShowcaseCard 
        title="Brand Primary Colors (Navy)" 
        description="Foundation colors for backgrounds, containers, and structural elements"
      >
        <ShowcaseGrid columns={3}>
          {brandPrimaryColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Brand Secondary Colors */}
      <ShowcaseCard 
        title="Brand Secondary Colors (Deep Dark)" 
        description="Ultra-deep backgrounds and high-contrast elements for premium dark theme"
      >
        <ShowcaseGrid columns={3}>
          {brandSecondaryColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Brand Accent Colors */}
      <ShowcaseCard 
        title="Brand Accent Colors (Purple)" 
        description="Primary interactive elements, buttons, links, and focus states"
      >
        <ShowcaseGrid columns={3}>
          {brandAccentColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Brand Highlight Colors */}
      <ShowcaseCard 
        title="Brand Highlight Colors (Coral)" 
        description="Secondary accents, status indicators, and decorative elements"
      >
        <ShowcaseGrid columns={3}>
          {brandHighlightColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Success Colors */}
      <ShowcaseCard 
        title="Success Colors (Emerald)" 
        description="Success states, confirmations, and positive feedback"
      >
        <ShowcaseGrid columns={3}>
          {successColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Warning Colors */}
      <ShowcaseCard 
        title="Warning Colors (Amber)" 
        description="Warning states, cautions, and attention-needed indicators"
      >
        <ShowcaseGrid columns={3}>
          {warningColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Error Colors */}
      <ShowcaseCard 
        title="Error Colors (Red)" 
        description="Error states, destructive actions, and critical alerts"
      >
        <ShowcaseGrid columns={3}>
          {errorColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>

      {/* Brand Neutral Scale */}
      <ShowcaseCard 
        title="Brand Neutral Scale" 
        description="Neutral colors for backgrounds, text, and borders"
      >
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2">
          {neutralShades.map((shade) => (
            <div key={shade} className="text-center">
              <div className={`w-full h-16 bg-brand-neutral-${shade} rounded-lg mb-2 border`}></div>
              <p className="text-xs">{shade}</p>
              <code className="text-xs text-muted-foreground block">
                bg-brand-neutral-{shade}
              </code>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      {/* System Colors */}
      <ShowcaseCard 
        title="System Colors" 
        description="Existing design system colors"
      >
        <ShowcaseGrid columns={4}>
          {systemColors.map((color) => (
            <ColorSwatch key={color.name} {...color} color={color.name} />
          ))}
        </ShowcaseGrid>
      </ShowcaseCard>
    </div>
  );
}
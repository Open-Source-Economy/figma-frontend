import { cva } from "class-variance-authority@0.7.1";

/**
 * Shared Form Component Variants
 * DRY principle implementation for consistent form styling across all components
 * Uses the blue-to-green gradient brand system
 */

// Base form element styles with unified form system  
export const formBaseVariants = cva(
  "flex w-full items-center border rounded-lg border-[color:var(--form-border)] bg-[color:var(--form-background)] text-[color:var(--form-text)] text-sm font-normal leading-normal tracking-normal transition-all duration-200 shadow-sm outline-none selection:bg-brand-accent selection:text-white hover:border-[color:var(--form-border-hover)] hover:bg-[color:var(--form-background-hover)] focus:border-[color:var(--form-border-focus)] focus:bg-[color:var(--form-background-focus)] focus:shadow-[0_0_0_2px_rgb(167_139_250_/_0.2)]",
  {
    variants: {
      variant: {
        // Default - Uses unified form styling
        default: "",
        
        // Outline - Enhanced border
        outline: "border-2 border-brand-primary/20 hover:border-brand-accent/40 focus:border-brand-accent focus:shadow-[var(--form-shadow),_var(--form-shadow-focus)]",
        
        // Filled - Modern filled appearance
        filled: "border-transparent bg-gradient-to-r from-muted/80 to-brand-primary/5 hover:from-muted hover:to-brand-primary/10 focus:border-brand-accent focus:from-background focus:to-brand-accent/10",
        
        // Ghost - Minimal appearance
        ghost: "border-transparent bg-transparent hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 focus:border-brand-accent/50 focus:bg-gradient-to-r focus:from-brand-primary/10 focus:to-brand-accent/10",
        
        // Success state
        success: "border-brand-success hover:border-brand-success focus:border-brand-success focus:shadow-[0_0_0_2px_rgb(16_185_129_/_0.2)]",
        
        // Error state  
        error: "border-brand-error hover:border-brand-error focus:border-brand-error focus:shadow-[0_0_0_2px_rgb(239_68_68_/_0.2)]",
        
        // Warning state
        warning: "border-brand-warning/50 hover:border-brand-warning/70 focus:border-brand-warning focus:shadow-[var(--form-shadow),_0_0_0_var(--form-ring-width)_rgb(251_191_36_/_var(--form-ring-opacity))]",
      },
      size: {
        sm: "text-xs",
        default: "text-sm", 
        lg: "text-base",
        xl: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Checkbox specific variants - Uses unified form system
export const checkboxVariants = cva(
  "shrink-0 w-5 h-5 rounded border border-form-border bg-form-background cursor-pointer transition-all hover:scale-110 hover:border-form-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-accent data-[state=checked]:border-brand-accent data-[state=checked]:text-white",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2 border-brand-primary/20 hover:border-brand-accent/40 data-[state=checked]:border-brand-accent",
        filled: "border-transparent bg-gradient-to-r from-muted/80 to-brand-primary/5 hover:from-muted hover:to-brand-primary/10 data-[state=checked]:from-brand-accent data-[state=checked]:to-brand-accent",
        ghost: "border-transparent bg-transparent hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 data-[state=checked]:bg-brand-accent data-[state=checked]:border-brand-accent",
        success: "data-[state=checked]:bg-brand-success data-[state=checked]:border-brand-success",
        error: "data-[state=checked]:bg-brand-error data-[state=checked]:border-brand-error",
        warning: "data-[state=checked]:bg-brand-warning data-[state=checked]:border-brand-warning",
      },
      size: {
        sm: "w-4 h-4",
        default: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Radio specific variants - Uses unified form system
export const radioVariants = cva(
  "aspect-square shrink-0 w-4 h-4 border border-[color:var(--form-border)] bg-[color:var(--form-background)] transition-all duration-200 cursor-pointer rounded-full shadow-xs disabled:cursor-not-allowed disabled:opacity-50 hover:border-[color:var(--form-border-hover)] focus:shadow-[0_0_0_2px_rgb(167_139_250_/_0.2)]",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2 border-brand-primary/20 hover:border-brand-accent/40 focus-visible:border-brand-accent focus-visible:shadow-[var(--form-shadow-focus)]",
        filled: "border-transparent bg-gradient-to-r from-muted/80 to-brand-primary/5 hover:from-muted hover:to-brand-primary/10 focus-visible:border-brand-accent",
        ghost: "border-transparent bg-transparent hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 focus-visible:border-brand-accent/50",
        success: "border-brand-success hover:border-brand-success focus-visible:border-brand-success focus-visible:shadow-[0_0_0_2px_rgb(16_185_129_/_0.2)]",
        error: "border-brand-error hover:border-brand-error focus-visible:border-brand-error focus-visible:shadow-[0_0_0_2px_rgb(239_68_68_/_0.2)]",
        warning: "border-brand-warning/50 hover:border-brand-warning/70 focus-visible:border-brand-warning",
      },
      size: {
        sm: "size-3.5",
        default: "size-4",
        lg: "size-5",
        xl: "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Radio indicator variants
export const radioIndicatorVariants = cva(
  "rounded-full transition-all",
  {
    variants: {
      variant: {
        default: "fill-brand-accent",
        outline: "fill-brand-accent",
        filled: "fill-brand-accent",
        ghost: "fill-brand-accent",
        success: "fill-brand-success",
        error: "fill-brand-error",
        warning: "fill-brand-warning",
      },
      size: {
        sm: "size-1.5",
        default: "size-2",
        lg: "size-2.5",
        xl: "size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Switch variants - Uses unified form system
export const switchVariants = cva(
  "peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 bg-[color:var(--form-border)] outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:shadow-[0_0_0_2px_rgb(167_139_250_/_0.2)]",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-brand-primary",
        outline: "border-brand-primary/20 data-[state=unchecked]:bg-transparent data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary",
        filled: "data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-muted/80 data-[state=unchecked]:to-brand-primary/5 data-[state=checked]:bg-brand-primary",
        ghost: "data-[state=unchecked]:bg-transparent data-[state=checked]:bg-brand-primary",
        success: "data-[state=checked]:bg-brand-success",
        error: "data-[state=checked]:bg-brand-error",
        warning: "data-[state=checked]:bg-brand-warning",
      },
      size: {
        sm: "h-4 w-7",
        default: "h-[1.15rem] w-8",
        lg: "h-5 w-9",
        xl: "h-6 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Switch thumb variants - Uses unified form system
export const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-sm transition-all duration-200 ring-0",
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
        default: "size-4 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
        lg: "size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5",
        xl: "size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// Slider variants
export const sliderTrackVariants = cva(
  "relative grow overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "bg-muted",
        outline: "bg-gradient-to-r from-muted/80 to-brand-primary/5",
        filled: "bg-gradient-to-r from-muted/80 to-brand-primary/10",
        ghost: "bg-muted/50",
        success: "bg-gradient-to-r from-muted/80 to-brand-success/5",
        error: "bg-gradient-to-r from-muted/80 to-brand-error/5",
        warning: "bg-gradient-to-r from-muted/80 to-brand-warning/5",
      },
      size: {
        sm: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
        default: "data-[orientation=horizontal]:h-4 data-[orientation=vertical]:w-1.5",
        lg: "data-[orientation=horizontal]:h-5 data-[orientation=vertical]:w-2",
        xl: "data-[orientation=horizontal]:h-6 data-[orientation=vertical]:w-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const sliderRangeVariants = cva(
  "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-brand-primary to-brand-accent",
        outline: "bg-gradient-to-r from-brand-primary to-brand-accent",
        filled: "bg-gradient-to-r from-brand-primary to-brand-accent",
        ghost: "bg-gradient-to-r from-brand-primary to-brand-accent",
        success: "bg-gradient-to-r from-brand-success to-brand-accent",
        error: "bg-gradient-to-r from-brand-error to-brand-accent",
        warning: "bg-gradient-to-r from-brand-warning to-brand-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const sliderThumbVariants = cva(
  "block shrink-0 rounded-full border shadow-sm transition-all hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 bg-background",
  {
    variants: {
      variant: {
        default: "border-brand-accent ring-brand-accent/50",
        outline: "border-brand-accent ring-brand-accent/50",
        filled: "border-brand-accent ring-brand-accent/50",
        ghost: "border-brand-accent ring-brand-accent/50",
        success: "border-brand-success ring-brand-success/50",
        error: "border-brand-error ring-brand-error/50",
        warning: "border-brand-warning ring-brand-warning/50",
      },
      size: {
        sm: "size-3",
        default: "size-4",
        lg: "size-5",
        xl: "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Export types for consistent usage
export type FormVariant = "default" | "outline" | "filled" | "ghost" | "success" | "error" | "warning";
export type FormSize = "sm" | "default" | "lg" | "xl";
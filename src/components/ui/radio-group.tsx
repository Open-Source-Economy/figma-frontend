"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group@1.2.3";
import { CircleIcon } from "lucide-react@0.487.0";
import { type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";
import { radioVariants, radioIndicatorVariants, type FormVariant, type FormSize } from "./form-variants";

interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  variant?: FormVariant;
  size?: FormSize;
}

interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariants> {}

const RadioGroupContext = React.createContext<{
  variant?: FormVariant;
  size?: FormSize;
}>({});

function RadioGroup({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ variant, size }}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn("grid gap-3", className)}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
    </RadioGroupContext.Provider>
  );
}

function RadioGroupItem({
  className,
  variant,
  size,
  ...props
}: RadioGroupItemProps) {
  const context = React.useContext(RadioGroupContext);
  const finalVariant = variant || context.variant || "default";
  const finalSize = size || context.size || "default";

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioVariants({ variant: finalVariant, size: finalSize }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          radioIndicatorVariants({ variant: finalVariant, size: finalSize })
        )} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };

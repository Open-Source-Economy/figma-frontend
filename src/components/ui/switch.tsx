"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { type VariantProps } from "class-variance-authority";

import { cn } from "./utils";
import { switchVariants, switchThumbVariants, type FormVariant, type FormSize } from "./form-variants";

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

function Switch({
  className,
  variant = "default",
  size = "default",
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant, size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
export type { SwitchProps };

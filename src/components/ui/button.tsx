import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-terracotta text-cream hover:bg-terracotta-dark",
        secondary: "bg-leaf text-cream hover:bg-leaf-dark",
        outline: "border-2 border-ink/15 bg-transparent text-ink hover:bg-paper",
        ghost: "text-ink hover:bg-paper",
        cream: "bg-cream text-ink hover:bg-sunflower",
        sunflower: "bg-sunflower text-ink hover:bg-sunflower-dark",
      },
      size: {
        default: "h-11 rounded-full px-5 text-sm",
        lg: "h-12 rounded-full px-7 text-base",
        sm: "h-9 rounded-full px-3.5 text-sm",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

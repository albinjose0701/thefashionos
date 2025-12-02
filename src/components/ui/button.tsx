import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-gold-dark shadow-lg hover:shadow-xl",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-foreground/20 bg-transparent hover:bg-foreground/5 hover:border-foreground/40",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-blue-dark shadow-lg",
        ghost: "hover:bg-foreground/5",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-charcoal text-cream border-0 hover:bg-charcoal/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5",
        "hero-outline": "border-2 border-charcoal/30 bg-transparent text-charcoal hover:bg-charcoal hover:text-cream",
        gold: "bg-gold text-charcoal font-semibold shadow-lg hover:bg-gold-dark transform hover:-translate-y-0.5",
        "gold-outline": "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-charcoal",
        dark: "bg-charcoal text-cream hover:bg-charcoal/90",
        "dark-outline": "border-2 border-cream/30 text-cream hover:bg-cream/10",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

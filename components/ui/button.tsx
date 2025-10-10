import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-md outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "medium",
      variant: "primary",
    },
    variants: {
      size: {
        large: "text h-12 gap-1.5 px-3 has-[>svg]:px-2.5",
        medium: "h-10 px-6 has-[>svg]:px-4",
        small: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      variant: {
        error: "bg-red-700 text-gray-1000 hover:bg-red-800",
        primary: "bg-gray-1000 text-gray-100 hover:bg-gray-900",
        secondary: "bg-gray-100 text-gray-1000 hover:bg-gray-200",
        warning: "bg-amber-700 text-gray-100 hover:bg-amber-800",
      },
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      className={cn(buttonVariants({ className, size, variant }))}
      data-slot="button"
      {...props}
    />
  );
}

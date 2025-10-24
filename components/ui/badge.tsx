import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import { variant } from "@/lib/utils/tailwind";

const badgeVariants = variant({
  base: "inline-flex items-center gap-x-1.5 border-1 px-2 py-0.5 text-button-12",
  variants: {
    intent: {
      primary: "border-gray-900 bg-gray-1000 text-gray-100",
    },
    shape: {
      square: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    shape: "circle",
  },
});

export type BadgeProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ children, intent, shape, ...props }: BadgeProps) {
  return (
    <span className={badgeVariants({ intent, shape })} {...props}>
      {children}
    </span>
  );
}

import type { HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";
import { variant } from "@/lib/utils/tailwind";

const badgeVariants = variant({
  base: "inline-flex items-center border-1 px-1.5 py-0.5 text-label-12",
  variants: {
    intent: {
      primary: "border-gray-900 bg-gray-1000 text-gray-100",
      secondary: "border-gray-400 bg-gray-100 text-gray-1000",
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

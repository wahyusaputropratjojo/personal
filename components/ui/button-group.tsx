import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { variant } from "@/lib/utils/tailwind";

const buttonGroupVariants = variant({
  base: "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  variants: {
    orientation: {
      horizontal:
        "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
      vertical:
        "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

type ButtonGroupProps = ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants>;

export function ButtonGroup({ orientation, ...props }: ButtonGroupProps) {
  return (
    <div
      className={buttonGroupVariants({ orientation })}
      data-orientation={orientation}
      {...props}
    />
  );
}

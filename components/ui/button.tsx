"use client";

import type { Ref } from "react";
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { variant } from "@/lib/utils/tailwind";

const buttonVariants = variant({
  base: "relative isolate inline-flex shrink-0 cursor-pointer pending:cursor-not-allowed select-none items-center justify-center border-1 outline-0 outline-transparent outline-offset-2 pending:brightness-50 transition-all focus-visible:z-10 focus-visible:outline-3 focus-visible:outline-gray-1000 disabled:cursor-not-allowed disabled:brightness-50 [&_svg]:shrink-0",
  variants: {
    fontSize: {
      small: "text-button-12",
      medium: "text-button-14",
      large: "text-button-16",
    },
    intent: {
      primary:
        "border-gray-900 pressed:border-gray-700 bg-gray-1000 pressed:bg-gray-900 text-gray-100 hover:border-gray-700 hover:bg-gray-900",
      secondary:
        "border-gray-400 pressed:border-gray-500 bg-gray-100 pressed:bg-gray-200 text-gray-1000 hover:border-gray-500 hover:bg-gray-200",
      tertiary:
        "border-transparent pressed:border-gray-500 bg-transparent pressed:bg-gray-300 hover:border-gray-500 hover:bg-gray-200",
      warning:
        "border-amber-400 pressed:border-amber-500 bg-amber-800 pressed:bg-amber-700 text-gray-100 hover:border-amber-500 hover:bg-amber-700",
      danger:
        "border-red-400 pressed:border-red-500 bg-red-800 pressed:bg-red-700 text-gray-1000 hover:border-red-500 hover:bg-red-700",
    },
    size: {
      small: "min-h-8 gap-x-1 px-4 has-[>svg]:px-2",
      medium: "h-10 gap-x-1.5 px-5 has-[>svg]:px-2.5",
      large: "h-12 gap-x-2 px-6 has-[>svg]:px-3",
    },
    icon: {
      true: "p-0!",
    },
    shape: {
      square: "rounded-md",
      circle: "rounded-full",
    },
  },
  compoundVariants: [
    {
      className: "[&_svg]:size-3",
      fontSize: "small",
    },
    {
      className: "[&_svg]:size-3.5",
      fontSize: "medium",
    },
    {
      className: "[&_svg]:w-4",
      fontSize: "large",
    },
    {
      className: "size-8 [&_svg]:size-3",
      icon: true,
      size: "small",
    },
    {
      className: "size-10 [&_svg]:size-3.5",
      icon: true,
      size: "medium",
    },
    {
      className: "size-12 [&_svg]:size-4",
      icon: true,
      size: "large",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    fontSize: "medium",
    shape: "square",
  },
});

type ButtonProps = {
  ref?: Ref<HTMLButtonElement>;
} & Omit<ButtonPrimitiveProps, "className"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  intent,
  fontSize,
  size,
  icon,
  shape,
  ref,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={buttonVariants({
        fontSize,
        size,
        intent,
        icon,
        shape,
      })}
      ref={ref}
      {...props}
    >
      {(values) => (
        <>
          {typeof props.children === "function"
            ? props.children(values)
            : props.children}
        </>
      )}
    </ButtonPrimitive>
  );
}

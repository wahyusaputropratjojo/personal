"use client";

import type { Ref } from "react";
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { variant } from "@/lib/utils/tailwind";

const buttonVariants = variant({
  base: "relative isolate inline-flex cursor-pointer select-none items-center justify-center transition-all focus:outline-gray-400 focus-visible:outline-4 [&_svg]:shrink-0",
  variants: {
    fontSize: {
      small: "text-button-12",
      medium: "text-button-14",
      large: "text-button-16",
    },
    intent: {
      primary:
        "bg-gray-1000 text-gray-100 hover:bg-gray-900 disabled:bg-red-500",
      secondary: "bg-gray-100 text-gray-1000 hover:bg-gray-200",
      plain: "bg-transparent hover:bg-gray-100",
      outline: "border-1 border-gray-400 bg-gray-100 hover:bg-gray-200",
      warning: "bg-amber-800 text-gray-100 hover:bg-amber-700",
      danger: "bg-red-800 text-gray-1000 hover:bg-red-700",
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
    isPending: {
      true: "cursor-not-allowed opacity-50",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
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
    {
      className: "hover:bg-gray-1000",
      isPending: true,
      intent: "primary",
    },
    {
      className: "hover:bg-gray-100",
      isPending: true,
      intent: "secondary",
    },
    {
      className: "hover:bg-transparent",
      isPending: true,
      intent: "plain",
    },
    {
      className: "hover:bg-gray-100",
      isPending: true,
      intent: "outline",
    },
    {
      className: "hover:bg-amber-800",
      isPending: true,
      intent: "warning",
    },
    {
      className: "hover:bg-red-800",
      isPending: true,
      intent: "danger",
    },
    {
      className: "hover:bg-gray-1000",
      isDisabled: true,
      intent: "primary",
    },
    {
      className: "hover:bg-gray-100",
      isDisabled: true,
      intent: "secondary",
    },
    {
      className: "hover:bg-transparent",
      isDisabled: true,
      intent: "plain",
    },
    {
      className: "hover:bg-gray-100",
      isDisabled: true,
      intent: "outline",
    },
    {
      className: "hover:bg-amber-800",
      isDisabled: true,
      intent: "warning",
    },
    {
      className: "hover:bg-red-800",
      isDisabled: true,
      intent: "danger",
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
  isPending,
  isDisabled,
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
        isPending,
        isDisabled,
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

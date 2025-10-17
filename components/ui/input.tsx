"use client";

import type { RefObject } from "react";
import {
  Input as InputPrimitive,
  type InputProps as InputPrimitiveProps,
} from "react-aria-components";

export type InputProps = {
  ref?: RefObject<HTMLInputElement>;
} & Omit<InputPrimitiveProps, "className">;

export function Input({ ref, ...props }: InputProps) {
  return <InputPrimitive ref={ref} {...props} />;
}

"use client";

import {
  Label as LabelPrimitive,
  type LabelProps as LabelPrimitiveProps,
} from "react-aria-components";

type LabelProps = Omit<LabelPrimitiveProps, "className">;

export function Label({ ...props }: LabelProps) {
  return <LabelPrimitive data-slot="label" {...props} />;
}

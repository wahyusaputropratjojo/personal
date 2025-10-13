import { extendTailwindMerge } from "tailwind-merge";
import { fontSize } from "@/lib/utils/extend-tailwind-variable";

export const cn = extendTailwindMerge({
  extend: {
    theme: {
      text: Object.values(fontSize).flat(),
    },
  },
});

<script lang="ts" module>
  import { cva, type VariantProps } from "class-variance-authority";

  export type LabelProps = Label.RootProps & VariantProps<typeof labelVariants>;

  export const labelVariants = cva("label", {
    variants: {
      size: {
        large: "label--large",
        medium: "label--medium",
        small: "label--small",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  });
</script>

<script lang="ts">
  import { Label } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    size,
    ...props
  }: LabelProps = $props();
</script>

<Label.Root bind:ref class={labelVariants({ size, className })} {...props} />

<style>
  :global {
    .label {
      color: var(--color-neutral-12);
      font-weight: 500;
      line-height: 1.375;
      letter-spacing: normal;
    }

    .label--large {
      font-size: var(--label-large, 1rem);
    }

    .label--medium {
      font-size: var(--label-medium, 0.875rem);
    }

    .label--small {
      font-size: var(--label-small, 0.75rem);
    }
  }
</style>

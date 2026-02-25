<script lang="ts" module>
  import type { LabelProps } from "$lib/components/ui/label.svelte";

  export type FieldLabelProps = LabelProps;
</script>

<script lang="ts">
  import Label from "$lib/components/ui/label.svelte";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldLabelProps = $props();
</script>

<Label
  bind:ref
  data-slot="field-label"
  class={["field__label", className]}
  {...props}
>
  {@render children?.()}
</Label>

<style>
  :global {
    .field__label {
      display: flex;
      gap: 0.5rem;
      width: fit-content;
      line-height: 1.375;

      &:has(> [data-slot="field"]) {
        flex-direction: column;
        border-color: var(--color-neutral-6);
        border-radius: 0.375rem;
        width: 100%;
      }

      & > [data-slot="field"] {
        padding: 1rem;
      }
    }
  }
</style>

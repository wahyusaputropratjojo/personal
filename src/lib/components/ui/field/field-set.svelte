<script lang="ts" module>
  import type { HTMLFieldsetAttributes } from "svelte/elements";

  export type FieldSetProps = HTMLFieldsetAttributes & {
    ref?: HTMLFieldSetElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldSetProps = $props();
</script>

<fieldset
  bind:this={ref}
  data-slot="field-set"
  class={["field__set", className]}
  {...props}
>
  {@render children?.()}
</fieldset>

<style>
  :global {
    .field__set {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      &:has(> [data-slot="checkbox-group"]),
      &:has(> [data-slot="radio-group"]) {
        gap: 0.75rem;
      }
    }
  }
</style>

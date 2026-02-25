<script lang="ts" module>
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldGroupProps = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldGroupProps = $props();
</script>

<div
  bind:this={ref}
  data-slot="field-group"
  class={["field__group", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global {
    .field__group {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      container-name: field-group;
      container-type: inline-size;
      width: 100%;

      &[data-slot="checkbox-group"] {
        gap: 0.75rem;
      }

      & > [data-slot="field-group"] {
        gap: 1rem;
      }
    }
  }
</style>

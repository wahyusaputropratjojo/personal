<script lang="ts" module>
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldLegendProps = SvelteHTMLElements["legend"] & {
    ref?: HTMLLegendElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldLegendProps = $props();
</script>

<legend
  bind:this={ref}
  data-slot="field-legend"
  class={["field-legend", className]}
  {...props}
>
  {@render children?.()}
</legend>

<style>
  :global {
    .field-legend {
      margin-bottom: 0.75rem;
      font-weight: 500;
      font-size: var(--body-medium);
      line-height: 1.5rem;
    }
  }
</style>

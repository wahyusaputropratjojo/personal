<script lang="ts" module>
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldTitleProps = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldTitleProps = $props();
</script>

<div
  bind:this={ref}
  data-slot="field-title"
  class={["field-title", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global {
    .field__title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      font-weight: 500;
      font-size: var(--label-medium);
      line-height: 1.375;
    }

    [data-slot="field"][data-disabled="true"] .field-title {
      opacity: 0.5;
    }
  }
</style>

<script lang="ts" module>
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldContentProps = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldContentProps = $props();
</script>

<div
  bind:this={ref}
  data-slot="field-content"
  class={["field__content", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global {
    .field__content {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      gap: 0.375rem;
      line-height: 1.375;
    }
  }
</style>

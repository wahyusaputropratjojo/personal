<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
  };

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: Props = $props();
</script>

<div
  bind:this={ref}
  data-slot="alert-dialog-header"
  class={["alert-dialog__header", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global() {
    .alert-dialog__header {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;

      @media (min-width: 640px) {
        text-align: start;
      }
    }
  }
</style>

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
  data-slot="alert-dialog-footer"
  class={["alert-dialog__footer", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global() {
    .alert-dialog__footer {
      display: flex;
      flex-direction: column-reverse;
      gap: 0.5rem;

      @media (min-width: 640px) {
        flex-direction: row;
        justify-content: flex-end;
      }
    }
  }
</style>

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
    inset?: boolean;
  };

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...props
  }: Props = $props();
</script>

<div
  bind:this={ref}
  data-slot="dropdown-menu-label"
  data-inset={inset}
  class={["dropdown-menu__label", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global {
    .dropdown-menu__label {
      padding: 0.375rem 0.5rem;
      font-weight: 600;
      font-size: 0.875rem;

      &[data-inset="true"] {
        padding-inline-start: 2rem;
      }
    }
  }
</style>

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  export type Props = SvelteHTMLElements["span"] & {
    ref?: HTMLSpanElement | null;
  };

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: Props = $props();
</script>

<span
  bind:this={ref}
  data-slot="dropdown-menu-shortcut"
  class={["dropdown-menu__shortcut", className]}
  {...props}
>
  {@render children?.()}
</span>

<style>
  :global {
    .dropdown-menu__shortcut {
      margin-inline-start: auto;
      color: var(--color-neutral-11);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }
  }
</style>

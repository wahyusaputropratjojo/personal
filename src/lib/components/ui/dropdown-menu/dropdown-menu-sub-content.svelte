<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof DropdownMenu.SubContent>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<DropdownMenu.SubContent
  bind:ref
  data-slot="dropdown-menu-sub-content"
  class={["dropdown-menu__sub-content", className]}
  {...props}
/>

<style>
  :global {
    .dropdown-menu__sub-content {
      transform-origin: var(--bits-dropdown-menu-content-transform-origin);
      z-index: 50;
      box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      border: 1px solid var(--border);
      border-radius: 0.375rem;
      background-color: var(--popover);
      padding: 0.25rem;
      min-width: 8rem;
      overflow: hidden;
      color: var(--popover-foreground);

      &[data-side="bottom"] {
        --slide-y: -0.5rem;
      }

      &[data-side="top"] {
        --slide-y: 0.5rem;
      }

      &[data-side="right"] {
        --slide-x: -0.5rem;
      }

      &[data-side="left"] {
        --slide-x: 0.5rem;
      }

      /* State animations */
      &[data-state="open"] {
        animation: dropdown-menu-sub-in 150ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }

      &[data-state="closed"] {
        animation: dropdown-menu-sub-out 150ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }
    }

    @keyframes dropdown-menu-sub-in {
      from {
        transform: scale(0.95) translateY(var(--slide-y, 0))
          translateX(var(--slide-x, 0));
        opacity: 0;
      }
      to {
        transform: scale(1) translateY(0) translateX(0);
        opacity: 1;
      }
    }

    @keyframes dropdown-menu-sub-out {
      from {
        transform: scale(1);
        opacity: 1;
      }
      to {
        transform: scale(0.95);
        opacity: 0;
      }
    }
  }
</style>

<script lang="ts">
  import DropdownMenuPortal from "./dropdown-menu-portal.svelte";
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = DropdownMenu.ContentProps & {
    portalProps?: Omit<
      ComponentProps<typeof DropdownMenuPortal>,
      "children" | "child"
    >;
  };

  let {
    ref = $bindable(null),
    sideOffset = 4,
    portalProps,
    class: className,
    ...props
  }: Props = $props();
</script>

<DropdownMenuPortal {...portalProps}>
  <DropdownMenu.Content
    bind:ref
    data-slot="dropdown-menu-content"
    {sideOffset}
    class={["dropdown-menu__content", className]}
    {...props}
  />
</DropdownMenuPortal>

<style>
  :global {
    .dropdown-menu__content {
      transform-origin: var(--bits-dropdown-menu-content-transform-origin);
      z-index: 50;
      outline: none;
      box-shadow:
        0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
      border: 1px solid var(--border);
      border-radius: 0.375rem;
      background-color: var(--popover);
      padding: 0.25rem;
      min-width: 8rem;
      max-height: var(--bits-dropdown-menu-content-available-height);
      overflow-x: hidden;
      overflow-y: auto;
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
        animation: dropdown-menu-in 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      &[data-state="closed"] {
        animation: dropdown-menu-out 150ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }
    }

    @keyframes dropdown-menu-in {
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

    @keyframes dropdown-menu-out {
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

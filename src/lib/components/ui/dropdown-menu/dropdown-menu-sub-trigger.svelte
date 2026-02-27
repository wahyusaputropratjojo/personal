<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof DropdownMenu.SubTrigger> & {
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

<DropdownMenu.SubTrigger
  bind:ref
  data-slot="dropdown-menu-sub-trigger"
  data-inset={inset}
  class={["dropdown-menu__sub-trigger", className]}
  {...props}
>
  {@render children?.()}
  <ChevronRightIcon class="dropdown-menu__sub-trigger-icon" />
</DropdownMenu.SubTrigger>

<style>
  :global {
    .dropdown-menu__sub-trigger {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: default;
      outline: none;
      border-radius: 0.125rem;
      padding: 0.375rem 0.5rem;
      font-size: 0.875rem;
      user-select: none;

      &[data-highlighted],
      &[data-state="open"] {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      &[data-disabled] {
        opacity: 0.5;
        pointer-events: none;
      }

      &[data-inset="true"] {
        padding-inline-start: 2rem;
      }

      & svg {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
        color: hsl(var(--muted-foreground));
      }
    }

    .dropdown-menu__sub-trigger-icon {
      margin-inline-start: auto;
    }
  }
</style>

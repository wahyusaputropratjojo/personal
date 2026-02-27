<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DropdownMenu.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
  };

  let {
    ref = $bindable(null),
    class: className,
    inset,
    variant = "default",
    ...props
  }: Props = $props();
</script>

<DropdownMenu.Item
  bind:ref
  data-slot="dropdown-menu-item"
  data-inset={inset}
  data-variant={variant}
  class={["dropdown-menu__item", className]}
  {...props}
/>

<style>
  :global {
    .dropdown-menu__item {
      display: flex;
      position: relative;
      align-items: center;
      gap: 0.5rem;
      cursor: default;
      outline: none;
      border-radius: 0.125rem;
      padding: 0.375rem 0.5rem;
      font-size: 0.875rem;
      user-select: none;

      &[data-highlighted] {
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

      &[data-variant="destructive"] {
        color: hsl(var(--destructive));

        & svg {
          color: hsl(var(--destructive)) !important;
        }

        &[data-highlighted] {
          background-color: hsl(var(--destructive) / 0.1);
          color: hsl(var(--destructive));

          :global(.dark) & {
            background-color: hsl(var(--destructive) / 0.2);
          }
        }
      }
    }
  }
</style>

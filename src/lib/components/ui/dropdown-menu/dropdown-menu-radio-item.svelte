<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import CircleIcon from "@lucide/svelte/icons/circle";
  import type { ComponentProps } from "svelte";

  type Props = Omit<ComponentProps<typeof DropdownMenu.RadioItem>, "child">;

  let {
    ref = $bindable(null),
    class: className,
    children: childrenProp,
    ...props
  }: Props = $props();
</script>

<DropdownMenu.RadioItem
  bind:ref
  data-slot="dropdown-menu-radio-item"
  class={["dropdown-menu__radio-item", className]}
  {...props}
>
  {#snippet children({ checked })}
    <span class="dropdown-menu__indicator">
      {#if checked}
        <CircleIcon class="dropdown-menu__icon-circle" />
      {/if}
    </span>
    {@render childrenProp?.({ checked })}
  {/snippet}
</DropdownMenu.RadioItem>

<style>
  :global {
    .dropdown-menu__radio-item {
      display: flex;
      position: relative;
      align-items: center;
      gap: 0.5rem;
      cursor: default;
      outline: none;
      border-radius: 0.125rem;
      padding: 0.375rem 0.5rem 0.375rem 2rem;
      font-size: 0.875rem;
      user-select: none;

      &:focus {
        background-color: hsl(var(--accent));
        color: hsl(var(--accent-foreground));
      }

      &[data-disabled] {
        opacity: 0.5;
        pointer-events: none;
      }

      & svg {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
      }
    }

    .dropdown-menu__indicator {
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      inset-inline-start: 0.5rem;
      width: 0.875rem;
      height: 0.875rem;
      pointer-events: none;
    }

    .dropdown-menu__indicator .dropdown-menu__icon-circle {
      fill: currentColor;
      width: 0.5rem;
      height: 0.5rem;
    }
  }
</style>

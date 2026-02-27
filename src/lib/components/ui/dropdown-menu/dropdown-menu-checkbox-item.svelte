<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import CheckIcon from "@lucide/svelte/icons/check";
  import MinusIcon from "@lucide/svelte/icons/minus";
  import type { Snippet, ComponentProps } from "svelte";

  type Props = Omit<
    ComponentProps<typeof DropdownMenu.CheckboxItem>,
    "children" | "child"
  > & {
    children?: Snippet;
  };

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    children: childrenProp,
    ...props
  }: Props = $props();
</script>

<DropdownMenu.CheckboxItem
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="dropdown-menu-checkbox-item"
  class={["dropdown-menu__checkbox-item", className]}
  {...props}
>
  {#snippet children({ checked, indeterminate })}
    <span class="dropdown-menu__indicator">
      {#if indeterminate}
        <MinusIcon class="dropdown-menu__icon" />
      {:else}
        <CheckIcon
          class={[
            "dropdown-menu__icon",
            !checked && "dropdown-menu__icon-transparent",
          ]}
        />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</DropdownMenu.CheckboxItem>

<style>
  :global {
    .dropdown-menu__checkbox-item {
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
        background-color: red;
        color: white;
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

    .dropdown-menu__icon {
      width: 1rem;
      height: 1rem;
    }

    .dropdown-menu__icon-transparent {
      color: transparent;
    }
  }
</style>

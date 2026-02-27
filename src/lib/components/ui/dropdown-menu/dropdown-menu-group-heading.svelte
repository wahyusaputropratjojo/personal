<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DropdownMenu.GroupHeading> & {
    inset?: boolean;
  };

  let {
    ref = $bindable(null),
    class: className,
    inset,
    ...props
  }: Props = $props();
</script>

<DropdownMenu.GroupHeading
  bind:ref
  data-slot="dropdown-menu-group-heading"
  data-inset={inset}
  class={["dropdown-menu__group-heading", className]}
  {...props}
/>

<style>
  :global {
    .dropdown-menu__group-heading {
      padding: 0.375rem 0.5rem;
      font-weight: 600;
      font-size: 0.875rem;

      &[data-inset="true"] {
        padding-inline-start: 2rem;
      }
    }
  }
</style>

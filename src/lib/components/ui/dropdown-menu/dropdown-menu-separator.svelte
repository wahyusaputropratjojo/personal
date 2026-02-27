<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof DropdownMenu.Separator>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<DropdownMenu.Separator
  bind:ref
  data-slot="dropdown-menu-separator"
  class={["dropdown-menu__separator", className]}
  {...props}
/>

<style>
  :global {
    .dropdown-menu__separator {
      margin: 0.25rem -0.25rem;
      background-color: var(--color-neutral-6);
      height: 1px;
    }
  }
</style>

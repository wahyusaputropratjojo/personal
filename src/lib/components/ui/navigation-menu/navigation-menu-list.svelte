<script lang="ts">
  import { NavigationMenu } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...props
  }: NavigationMenu.ListProps = $props();
</script>

<NavigationMenu.List
  class={["navigation-menu__list", className]}
  data-slot="navigation-menu-list"
  bind:ref
  {...props}
/>

<style>
  :global {
    .navigation-menu__list {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
    }
  }
</style>

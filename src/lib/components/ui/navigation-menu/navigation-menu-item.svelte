<script lang="ts">
  import { NavigationMenu } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...props
  }: NavigationMenu.ItemProps = $props();
</script>

<NavigationMenu.Item
  class={["navigation-menu__item", className]}
  data-slot="navigation-menu-item"
  bind:ref
  {...props}
/>

<style>
  :global {
    .navigation-menu__item {
      position: relative;
    }
  }
</style>

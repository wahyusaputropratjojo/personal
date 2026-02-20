<script lang="ts">
  import { NavigationMenu } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: NavigationMenu.RootProps = $props();
</script>

<NavigationMenu.Root
  class={["navigation-menu", className]}
  data-slot="navigation-menu"
  bind:ref
  {...props}
>
  {@render children()}
  <NavigationMenu.Viewport
    class="navigation-menu__viewport"
    data-slot="navigation-menu-viewport"
    {...props}
  />
</NavigationMenu.Root>

<style>
  :global {
    .navigation-menu {
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .navigation-menu__viewport {
      position: absolute;
      top: 100%;
      width: 100%;
      width: var(--bits-navigation-menu-viewport-width);
      height: var(--bits-navigation-menu-viewport-height);
      margin-top: 0.5rem;
      overflow: hidden;
      background-color: var(--color-neutral-2);
      border-radius: 1rem;
      transition:
        width,
        height,
        250ms ease;
    }
  }
</style>

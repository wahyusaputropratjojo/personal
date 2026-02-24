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
  {@render children?.()}
  <NavigationMenu.Viewport
    class="navigation-menu__viewport"
    data-slot="navigation-menu-viewport"
    {...props}
  />
</NavigationMenu.Root>

<style>
  :global {
    .navigation-menu {
      display: flex;
      position: relative;
      justify-content: center;
      z-index: 10;
      width: 100%;
    }

    .navigation-menu__viewport {
      position: absolute;
      top: 100%;
      transition:
        width,
        height,
        250ms ease;
      margin-top: 0.5rem;
      border-radius: 1rem;
      background-color: var(--color-neutral-2);
      width: 100%;
      width: var(--bits-navigation-menu-viewport-width);
      height: var(--bits-navigation-menu-viewport-height);
      overflow: hidden;
    }
  }
</style>

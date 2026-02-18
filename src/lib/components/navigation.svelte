<script lang="ts">
  import { NavigationMenu } from "bits-ui";
  import { page } from "$app/state";

  const routes = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  let props = $props();
</script>

<NavigationMenu.Root
  {...props}
  class={["navigation-menu", props.class]}
  value={page.url.pathname}
>
  <NavigationMenu.List class="navigation-menu__list">
    {#each routes as { href, title }}
      <NavigationMenu.Item class="navigation-menu__item">
        <NavigationMenu.Link
          active={page.url.pathname === href}
          class="navigation-menu__trigger"
          {href}
        >
          {title}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    {/each}
  </NavigationMenu.List>
</NavigationMenu.Root>

<style>
  :global {
    .navigation-menu {
      min-width: max-content;
    }

    .navigation-menu__list {
      position: relative;
      display: flex;
      gap: 0.25rem;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .navigation-menu__item {
      position: relative;
    }

    .navigation-menu__trigger {
      --link-border-radius: calc(
        var(--popup-border-radius) - var(--popup-padding)
      );

      box-sizing: border-box;
      display: inline flex;
      gap: 0.25rem;
      align-items: center;
      width: 100%;
      min-height: 2rem;
      padding: 0.2rem 0.5rem;
      font-size: var(--label-medium);
      font-weight: var(--weight-medium);
      line-height: var(--leading-normal);
      color: var(--color-neutral-11);
      letter-spacing: var(--tracking-normal);
      text-decoration: none;
      user-select: none;
      outline-color: transparent;
      border-radius: var(--link-border-radius, calc(infinity * 1px));
      transition: color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;

      & svg {
        width: 0.75rem;
        height: 0.75rem;
      }

      &:disabled {
        pointer-events: none;
        opacity: 50%;
      }

      &:hover {
        color: var(--color-neutral-12);
        background-color: var(--color-neutral-4);
      }

      &:focus-visible {
        color: var(--color-neutral-12);
        outline-width: 3px;
        outline-style: solid;
        outline-color: var(--color-primary-8);
        outline-offset: 1px;
        background-color: var(--color-neutral-4);
      }

      &[data-active] {
        color: var(--color-primary-12);
        background-color: var(--color-primary-5);
      }
    }
  }
</style>

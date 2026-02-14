<script lang="ts">
  import { HouseIcon, MessageCircleIcon, UserRoundIcon } from "@lucide/svelte";
  import { Tabs } from "bits-ui";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";

  const routes = [
    {
      href: "/",
      icon: HouseIcon,
      title: "Home",
    },
    {
      href: "/about",
      icon: MessageCircleIcon,
      title: "About",
    },
    {
      href: "/contact",
      icon: UserRoundIcon,
      title: "Contact",
    },
  ];

  let props = $props();
</script>

<Tabs.Root
  {...props}
  value={page.url.pathname}
  onValueChange={(value) => goto(value, { keepFocus: true })}
  class={["tabs-bar", props.class]}
>
  <Tabs.List class="tabs-bar__list">
    {#each routes as { href, title, icon: Icon }}
      <Tabs.Trigger class="tabs-bar__trigger" value={href}>
        {#snippet child({ props })}
          <a {href} {...props}>
            <Icon />
            {title}
          </a>
        {/snippet}
      </Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>

<style>
  :global {
    .tabs-bar {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .tabs-bar__list {
      position: relative;
      z-index: 0;
      display: grid;
      grid-auto-rows: minmax(0, 1fr);
      grid-auto-columns: minmax(0, 1fr);
      grid-auto-flow: column;
      height: 4rem;
      padding: 0.25rem;
      background-color: var(--color-neutral-3);
      border-radius: calc(infinity * 1px);
    }

    .tabs-bar__trigger {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding-inline: 1rem;
      font-size: var(--label-small);
      color: var(--color-neutral-11);
      outline-width: 3px;
      outline-style: solid;
      outline-color: transparent;
      outline-offset: 1px;
      border-radius: calc(infinity * 1px);
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 250ms;
      transition-property: color, background-color;

      &:focus-visible {
        outline-color: var(--color-primary-8);
      }

      &[data-state="active"] {
        color: var(--color-neutral-12);
        background-color: var(--color-neutral-5);
      }

      & svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
</style>

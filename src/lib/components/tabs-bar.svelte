<script lang="ts">
  import type { Pathname } from "$app/types";
  import type { Component } from "svelte";
  import {
    HouseIcon,
    MessageCircleIcon,
    UserRoundIcon,
    MailIcon,
  } from "@lucide/svelte";
  import { Tabs } from "bits-ui";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  type Routes = {
    id: string;
    href: Pathname;
    icon: Component;
    title: string;
  };

  const routes: Routes[] = [
    {
      id: "48804dac-61a1-4901-89d9-c04b46a3eea0",
      href: "/",
      icon: HouseIcon,
      title: "Home",
    },
    {
      id: "15e3e64a-7516-485f-aee4-bcb0862ffb2f",
      href: "/about",
      icon: MessageCircleIcon,
      title: "About",
    },
    {
      id: "720949cf-36a8-459e-9bff-1405b2a4e585",
      href: "/contact",
      icon: UserRoundIcon,
      title: "Contact",
    },
    {
      id: "",
      href: "/inbox",
      icon: MailIcon,
      title: "Inbox",
    },
  ];

  let props = $props();
</script>

<Tabs.Root
  {...props}
  value={page.url.pathname}
  onValueChange={(value: Pathname) => goto(resolve(value), { keepFocus: true })}
  class={["tabs-bar", props.class]}
>
  <Tabs.List class="tabs-bar__list">
    {#each routes as { id, href, title, icon: Icon } (id)}
      <Tabs.Trigger class="tabs-bar__trigger" value={href}>
        {#snippet child({ props })}
          <a href={resolve(href)} {...props}>
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
      display: grid;
      position: relative;
      grid-auto-rows: minmax(0, 1fr);
      grid-auto-columns: minmax(0, 1fr);
      grid-auto-flow: column;
      z-index: 0;
      border-radius: calc(infinity * 1px);
      background-color: var(--color-neutral-3);
      padding: 0.25rem;
      height: 4rem;
    }

    .tabs-bar__trigger {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      transition-duration: 250ms;
      transition-property: color, background-color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      outline-color: transparent;
      outline-style: solid;
      outline-width: 3px;
      outline-offset: 1px;
      border-radius: calc(infinity * 1px);
      padding-inline: 1rem;
      width: 100%;
      height: 100%;
      color: var(--color-neutral-11);
      font-size: var(--label-small);

      &:focus-visible {
        outline-color: var(--color-primary-8);
      }

      &[data-state="active"] {
        background-color: var(--color-neutral-5);
        color: var(--color-neutral-12);
      }

      & svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
</style>

<script lang="ts">
  import type { Pathname } from "$app/types";
  import { resolve } from "$app/paths";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { page } from "$app/state";

  type Routes = {
    id: string;
    href: Pathname;
    title: string;
  };

  const routes: Routes[] = [
    {
      id: "aa47feff-1eb6-4ce7-b681-050000e97d3a",
      href: "/",
      title: "Home",
    },
    {
      id: "b88ba4ab-151d-4adf-b395-0afd77b3b11e",
      href: "/about",
      title: "About",
    },
    {
      id: "004f5861-72f0-4b52-95dd-e354b2daa2b3",
      href: "/contact",
      title: "Contact",
    },
    {
      id: "8fb67792-5d75-4a6c-9ff6-8f19d40ececa",
      href: "/inbox",
      title: "Inbox",
    },
  ];

  let props = $props();
</script>

<NavigationMenu.Root value={page.url.pathname} {...props}>
  <NavigationMenu.List>
    {#each routes as { id, href, title } (id)}
      <NavigationMenu.Item>
        <NavigationMenu.Link
          active={page.url.pathname === href}
          href={resolve(href)}
        >
          {title}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    {/each}
  </NavigationMenu.List>
</NavigationMenu.Root>

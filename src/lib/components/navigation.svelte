<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import { page } from "$app/state";

  const routes = [
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
  ];

  let props = $props();
</script>

<NavigationMenu.Root value={page.url.pathname} {...props}>
  <NavigationMenu.List>
    {#each routes as { id, href, title } (id)}
      <NavigationMenu.Item>
        <NavigationMenu.Link active={page.url.pathname === href} {href}>
          {title}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    {/each}
  </NavigationMenu.List>
</NavigationMenu.Root>

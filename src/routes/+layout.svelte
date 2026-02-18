<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/header.svelte";
  import TabsBar from "$lib/components/tabs-bar.svelte";
  import "./global.css";

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher track={false} />
<Header />
<TabsBar class="layout__tabs-bar" />
{@render children()}

<style>
  :global {
    .layout__tabs-bar {
      position: fixed;
      bottom: 0;
      z-index: 100;
      padding-block: 1rem;
      padding-inline: 1rem;
      background: linear-gradient(to top, var(--color-neutral-1), transparent);

      @media (width >= 48rem) {
        display: none;
      }
    }
  }
</style>

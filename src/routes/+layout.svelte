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
      background: linear-gradient(to top, var(--color-neutral-1), transparent);
      padding-inline: 1rem;
      padding-block: 1rem;

      @media (width >= 48rem) {
        display: none;
      }
    }
  }
</style>

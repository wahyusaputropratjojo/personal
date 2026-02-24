<script lang="ts">
  import { MoonIcon, SunIcon } from "@lucide/svelte";
  import { mode, setMode } from "mode-watcher";
  import Button from "$lib/components/ui/button.svelte";

  function toggleMode() {
    const newTheme = mode.current === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setMode(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setMode(newTheme);
    });
  }

  let props = $props();
</script>

<Button {...props} size="small" intent="secondary" onclick={toggleMode}>
  {#if mode.current === "light"}
    <SunIcon />
  {:else}
    <MoonIcon />
  {/if}
</Button>

<style>
  ::view-transition-old(root) {
    animation: none;
  }

  ::view-transition-new(root) {
    animation: wipe-up 1000ms cubic-bezier(0.77, 0, 0.18, 1);
  }

  @keyframes wipe-up {
    from {
      clip-path: inset(100% 0% 0% 0%);
    }
    to {
      clip-path: inset(0% 0% 0% 0%);
    }
  }
</style>

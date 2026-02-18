<script lang="ts">
  import Navigation from "$lib/components/navigation.svelte";
  import ThemeToggle from "$lib/components/theme-toggle.svelte";

  let props = $props();
</script>

<header {...props}>
  <p class="header__title">Personal</p>
  <Navigation class="header__navigation" />
  <ThemeToggle class="header__theme-toggle" />
</header>

<style>
  header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: var(--header-height);
    padding-inline: 1rem;
    background-color: transparent;

    @media (width >= 48rem) {
      position: sticky;
      top: 0;
      z-index: 10;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      height: var(--header-height);
      background-color: var(--color-neutral-1);
      border-color: var(--color-neutral-6);
      border-bottom-width: 1px;
    }

    p {
      font-size: var(--body-medium);
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.05em;
    }
  }

  :global {
    .header__title {
      justify-self: start;
    }

    .header__navigation {
      display: none;
      justify-self: center;

      @media (width >= 48rem) {
        display: block;
      }
    }

    .header__theme-toggle {
      justify-self: end;
    }
  }
</style>

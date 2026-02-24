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
    display: grid;
    position: absolute;
    top: 0;
    left: 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: center;
    align-items: center;
    justify-items: center;
    z-index: 10;
    background-color: transparent;
    padding-inline: 1rem;
    width: 100%;
    height: var(--header-height);

    @media (width >= 48rem) {
      position: sticky;
      top: 0;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      z-index: 10;
      border-bottom-width: 1px;
      border-color: var(--color-neutral-6);
      background-color: var(--color-neutral-1);
      height: var(--header-height);
    }

    p {
      font-weight: 600;
      font-size: var(--body-medium);
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

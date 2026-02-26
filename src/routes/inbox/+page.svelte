<script lang="ts">
  import Messages from "./messages.svelte";
</script>

<main>
  <section class="content-section">
    <h1>Inbox</h1>
    <Messages />
  </section>
</main>

<style>
  main {
    display: grid;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media (width >= 48rem) {
      grid-template-columns: repeat(2, 1fr);
      gap: unset;
      row-gap: 2rem;
      padding-top: unset;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-columns: 1fr 2fr 1fr;
      gap: unset;
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /*padding-inline: 1rem;*/

    @media (width >= 48rem) {
      grid-column: 1 / span 2;
    }

    @media (width >= 80rem) {
      grid-column: 2;
      border-color: var(--color-neutral-6);
      border-inline-width: 1px;
      border-inline-style: solid;
      /*padding-inline: 1rem;*/
      padding-block: 3rem;
      height: calc(100vh - var(--header-height));
    }

    h1 {
      padding-inline: 1rem;
      color: var(--color-neutral-12);
      font-weight: 500;
      font-size: var(--title-medium);
      line-height: 1;
      letter-spacing: -0.025em;
    }
  }
</style>

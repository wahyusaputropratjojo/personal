<script lang="ts">
</script>

<main>
  <section class="title-section">
    <enhanced:img
      class="image"
      src="$lib/assets/portrait-1.webp"
      alt="Wahyu Saputro Pratjojo - Portrait"
    />
    <h1>Home</h1>
  </section>

  <section class="introduction-section">
    <p>
      I build robust web application that unite elegant design and powerful
      engineering, delivering performant, accessible, and refined.
    </p>
  </section>

  <section class="content-section content"></section>
</main>

<style>
  main {
    display: grid;
    grid-template-areas:
      "title"
      "introduction"
      "content";
    gap: 2rem;
    padding-bottom: 8rem;

    @media (width >= 48rem) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "introduction title"
        "content content";
      gap: unset;
      row-gap: 2rem;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: "introduction content title";
      gap: unset;
    }
  }

  .title-section {
    display: flex;
    grid-area: title;
    flex-direction: column;
    gap: 1rem;

    @media (width >= 48rem) {
      justify-content: space-between;
      padding: 1rem;
    }

    @media (width >= 80rem) {
      position: sticky;
      top: var(--header-height);
      padding-inline: 1rem;
      padding-block: 3rem;
      height: calc(100vh - var(--header-height));
    }

    h1 {
      display: none;
      padding-inline: 1rem;
      color: var(--color-neutral-12);
      font-weight: 600;
      font-size: var(--display-medium);
      line-height: 1;
      letter-spacing: -0.05em;

      @media (width >= 48rem) {
        display: block;
        text-align: right;
      }
    }
  }

  .introduction-section {
    display: flex;
    grid-area: introduction;
    flex-direction: column;
    gap: 2.5rem;
    padding-inline: 1rem;

    @media (width >= 48rem) {
      justify-content: space-between;
      padding-block: 1rem;
    }

    @media (width >= 80rem) {
      position: sticky;
      top: var(--header-height);
      padding-inline: 1rem;
      padding-block: 3rem;
      height: calc(100vh - var(--header-height));
    }

    p {
      color: var(--color-neutral-12);
      font-weight: 400;
      font-size: var(--body-large);
      line-height: 1.5;
      letter-spacing: normal;
      text-wrap: pretty;
    }
  }

  .content-section {
    display: flex;
    grid-area: content;
    flex-direction: column;
    gap: 1.5rem;
    padding-inline: 1rem;

    @media (width >= 80rem) {
      border-color: var(--color-neutral-6);
      border-inline-width: 1px;
      border-inline-style: solid;
      padding-inline: 1rem;
      padding-block: 3rem;
    }
  }
</style>

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
      grid-template-areas:
        "introduction title"
        "content content";
      grid-template-columns: 1fr 1fr;
      gap: unset;
      row-gap: 2rem;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-areas: "introduction content title";
      grid-template-columns: 1fr 2fr 1fr;
      gap: unset;
    }
  }

  .title-section {
    display: flex;
    flex-direction: column;
    grid-area: title;
    gap: 1rem;

    @media (width >= 48rem) {
      justify-content: space-between;
      padding: 1rem;
    }

    @media (width >= 80rem) {
      position: sticky;
      top: var(--header-height);
      height: calc(100vh - var(--header-height));
      padding-block: 3rem;
      padding-inline: 1rem;
    }

    h1 {
      display: none;
      padding-inline: 1rem;
      font-size: var(--display-medium);
      font-weight: 600;
      line-height: 1;
      color: var(--color-neutral-12);
      letter-spacing: -0.05em;

      @media (width >= 48rem) {
        display: block;
        text-align: right;
      }
    }
  }

  .introduction-section {
    display: flex;
    flex-direction: column;
    grid-area: introduction;
    gap: 2.5rem;
    padding-inline: 1rem;

    @media (width >= 48rem) {
      justify-content: space-between;
      padding-block: 1rem;
    }

    @media (width >= 80rem) {
      position: sticky;
      top: var(--header-height);
      height: calc(100vh - var(--header-height));
      padding-block: 3rem;
      padding-inline: 1rem;
    }

    p {
      font-size: var(--body-large);
      font-weight: 400;
      line-height: 1.5;
      color: var(--color-neutral-12);
      letter-spacing: normal;
      text-wrap: pretty;
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    grid-area: content;
    gap: 1.5rem;
    padding-inline: 1rem;

    @media (width >= 80rem) {
      padding-block: 3rem;
      padding-inline: 1rem;
      border-color: var(--color-neutral-6);
      border-inline-style: solid;
      border-inline-width: 1px;
    }
  }
</style>

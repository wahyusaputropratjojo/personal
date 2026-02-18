<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import FacebookIcon from "$lib/components/icons/facebook.svelte";
  import GitHubIcon from "$lib/components/icons/github.svelte";
  import InstagramIcon from "$lib/components/icons/instagram.svelte";
  import LinkedInIcon from "$lib/components/icons/linkedin.svelte";

  const contacts = [
    {
      items: [
        {
          href: "https://www.facebook.com/wahyusaputropratjojo",
          icon: FacebookIcon,
          title: "Facebook",
        },
        {
          href: "https://www.instagram.com/opos___",
          icon: InstagramIcon,
          title: "Instagram",
        },
        {
          href: "https://www.linkedin.com/in/wahyusaputropratjojo",
          icon: LinkedInIcon,
          title: "LinkedIn",
        },
      ],
      title: "Socials",
    },
    {
      items: [
        {
          href: "https://github.com/wahyusaputropratjojo",
          icon: GitHubIcon,
          title: "GitHub",
        },
      ],
      title: "Collaboration",
    },
  ];
</script>

<main>
  <section class="title-section">
    <enhanced:img
      src="$lib/assets/portrait-3.webp"
      alt="Wahyu Saputro Pratjojo - Portrait"
    />
    <h1>Contact</h1>
  </section>

  <section class="connect-section">
    {#each contacts as { items, title }}
      <article>
        <h2>{title}</h2>
        <ul>
          {#each items as { href, icon: Icon, title }}
            <li>
              <p>{title}</p>
              <Button intent="secondary" size="small">
                <a {href} rel="noopener noreferrer" target="_blank">
                  Connect To
                </a>
                <Icon />
              </Button>
            </li>
          {/each}
        </ul>
      </article>
    {/each}
  </section>

  <section class="content-section"></section>
</main>

<style>
  main {
    display: grid;
    grid-template-areas:
      "title"
      "connect"
      "content";
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding-bottom: 5rem;

    @media (width >= 48rem) {
      grid-template-areas:
        "connect title"
        "content content";
      grid-template-columns: repeat(2, 1fr);
      gap: unset;
      row-gap: 2rem;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-areas: "connect content title";
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
      padding-inline: 1rem;
      font-size: var(--display-medium);
      font-weight: 600;
      line-height: 1;
      color: var(--color-neutral-12);
      letter-spacing: -0.05em;

      @media (width >= 48rem) {
        text-align: right;
      }
    }
  }

  .connect-section {
    display: flex;
    flex-direction: column;
    grid-area: connect;
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

    article {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      color: var(--color-neutral-12);

      h2 {
        font-size: var(--title-medium);
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.025em;
      }

      ul {
        --gap: 0.75rem;

        display: grid;
        gap: var(--gap);
      }

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: var(--gap);
        border-color: var(--color-neutral-6);
        border-bottom-width: 1px;

        &:first-of-type {
          padding-top: var(--gap);
          border-top-width: 1px;
        }
      }

      p {
        font-size: var(--body-medium);
        font-weight: 500;
        line-height: 1;
        letter-spacing: normal;
      }
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

<script lang="ts">
  import Button from "$lib/components/ui/button.svelte";
  import FacebookIcon from "$lib/components/icons/facebook.svelte";
  import GitHubIcon from "$lib/components/icons/github.svelte";
  import InstagramIcon from "$lib/components/icons/instagram.svelte";
  import LinkedInIcon from "$lib/components/icons/linkedin.svelte";
  import MessageForm from "$lib/components/forms/message-form.svelte";

  const contacts = [
    {
      id: "dc5da2a3-0cf2-4e48-b064-e736fa9ec610",
      items: [
        {
          id: "bb5f1e63-e9e7-4a0f-9ebb-0362409561ea",
          href: "https://www.facebook.com/wahyusaputropratjojo",
          icon: FacebookIcon,
          title: "Facebook",
        },
        {
          id: "46525df1-b894-4e30-a4b1-f84207619e33",
          href: "https://www.instagram.com/opos___",
          icon: InstagramIcon,
          title: "Instagram",
        },
        {
          id: "05b6281a-dbe3-4b40-b48a-c60d31bfa71a",
          href: "https://www.linkedin.com/in/wahyusaputropratjojo",
          icon: LinkedInIcon,
          title: "LinkedIn",
        },
      ],
      title: "Socials",
    },
    {
      id: "9f6369bf-b574-4142-85c1-a4b2299044f4",
      items: [
        {
          id: "d9b6138a-e087-4776-87ce-735f12acc895",
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
    {#each contacts as { id, items, title } (id)}
      <article>
        <h2>{title}</h2>
        <ul>
          {#each items as { id, href, icon: Icon, title } (id)}
            <li>
              <p>{title}</p>
              <a
                {href}
                rel="external"
                target="_blank"
                tabindex="-1"
                aria-hidden="true"
              >
                <Button
                  intent="secondary"
                  size="small"
                  aria-label="Connect to {title}"
                >
                  Connect to
                  <Icon />
                </Button>
              </a>
            </li>
          {/each}
        </ul>
      </article>
    {/each}
  </section>

  <section class="content-section">
    <MessageForm />
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-areas:
      "title"
      "connect"
      "content";
    gap: 2rem;
    padding-bottom: 5rem;
    width: 100%;
    height: 100%;

    @media (width >= 48rem) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "connect title"
        "content content";
      gap: unset;
      row-gap: 2rem;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: "connect content title";
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
      padding-inline: 1rem;
      color: var(--color-neutral-12);
      font-weight: 600;
      font-size: var(--display-medium);
      line-height: 1;
      letter-spacing: -0.05em;

      @media (width >= 48rem) {
        text-align: right;
      }
    }
  }

  .connect-section {
    display: flex;
    grid-area: connect;
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

    article {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      color: var(--color-neutral-12);

      h2 {
        font-weight: 500;
        font-size: var(--title-medium);
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
        justify-content: space-between;
        align-items: center;
        border-bottom-width: 1px;
        border-color: var(--color-neutral-6);
        padding-bottom: var(--gap);

        &:first-of-type {
          border-top-width: 1px;
          padding-top: var(--gap);
        }
      }

      p {
        font-weight: 500;
        font-size: var(--body-medium);
        line-height: 1;
        letter-spacing: normal;
      }
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

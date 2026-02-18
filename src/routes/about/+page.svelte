<script lang="ts">
  const backgrounds = [
    {
      items: [
        {
          title: "Name",
          value: "Wahyu Saputro Pratjojo",
        },
        {
          title: "Location",
          value: "North Sulawesi, Indonesia",
        },
        {
          title: "Languages",
          value: "Indonesia, English",
        },
      ],
      title: "Profile",
    },
    {
      items: [
        {
          title: "Institution",
          value: "Politeknik Negeri Manado",
        },
        {
          title: "Field of Study",
          value: "Informatics Engineering",
        },
        {
          title: "Degree",
          value: "Bachelor of Applied Science",
        },
        {
          title: "Graduated",
          value: "2023",
        },
      ],
      title: "Education",
    },
  ];

  const services = [
    {
      description:
        "I specialize in building robust, scalable front-end infrastructures using React and Next.js. My focus is on writing maintainable code that drives complex applications while ensuring a seamless developer experience.",
      title: "Web Application Development",
    },
    {
      description:
        "Translating static designs into living, breathing interfaces. I use Tailwind CSS and motion libraries to create highly responsive experiences that delight users and strictly adhere to modern design systems.",
      title: "Interactive UI Implementation",
    },
    {
      description:
        "A slow website is a broken website. I employ advanced optimization techniques from server-side rendering to code splitting to ensure your application achieves top tier Lighthouse scores and lightning-fast load times.",
      title: "Performance Optimization",
    },
  ];
</script>

<main>
  <section class="title-section">
    <enhanced:img
      src="$lib/assets/portrait-2.webp"
      alt="Wahyu Saputro Pratjojo - Portrait"
    />
    <h1>About</h1>
  </section>

  <section class="background-section">
    {#each backgrounds as { items, title }}
      <article>
        <h2>{title}</h2>
        <ul>
          {#each items as item}
            <li>
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>{item.value}</p>
            </li>
          {/each}
        </ul>
      </article>
    {/each}
  </section>

  <section class="content-section">
    <article>
      <h2>Services</h2>
      <ul>
        {#each services as { description, title }}
          <li>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        {/each}
      </ul>
    </article>
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-areas:
      "title"
      "background"
      "content";
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding-bottom: 8rem;

    @media (width >= 48rem) {
      grid-template-areas:
        "title background"
        "content content";
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
      row-gap: 2rem;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-areas: "title content background";
      grid-template-columns: 1fr 2fr 1fr;
      gap: 0;
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
    }
  }

  .background-section {
    display: flex;
    flex-direction: column;
    grid-area: background;
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
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
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
        color: var(--color-neutral-11);

        &:last-of-type {
          text-align: right;
        }
      }

      strong {
        font-weight: 500;
        color: var(--color-neutral-12);
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

        display: flex;
        flex-direction: column;
        gap: var(--gap);
      }

      li {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        padding-bottom: var(--gap);
        border-color: var(--color-neutral-6);
        border-bottom-width: 1px;

        &:first-of-type {
          padding-top: var(--gap);
          border-top-width: 1px;
        }
      }

      h3 {
        font-size: var(--title-small);
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.025em;
      }

      p {
        color: var(--color-neutral-11);
      }
    }
  }
</style>

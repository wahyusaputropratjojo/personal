<script lang="ts">
  const backgrounds = [
    {
      id: "2e243ffd-6f1b-41e9-98c9-bab61888f7e2",
      items: [
        {
          id: "7201e660-2a61-4de7-be6c-a3ec7c7400e9",
          title: "Name",
          value: "Wahyu Saputro Pratjojo",
        },
        {
          id: "a0d23102-3f64-4e38-ba19-124b992cc1d0",
          title: "Location",
          value: "North Sulawesi, Indonesia",
        },
        {
          id: "4065c8d9-5cc4-44f9-89d7-6cae746b6702",
          title: "Languages",
          value: "Indonesia, English",
        },
      ],
      title: "Profile",
    },
    {
      id: "cd157750-b6ec-44d8-8449-6fb0a6389399",
      items: [
        {
          id: "a2512ee2-6665-4616-afcf-a1f13cac018e",
          title: "Institution",
          value: "Politeknik Negeri Manado",
        },
        {
          id: "f90612f4-85ff-4060-9d35-f67cabdd2283",
          title: "Field of Study",
          value: "Informatics Engineering",
        },
        {
          id: "d1a80bfb-4955-49a6-8526-ac0ba833032c",
          title: "Degree",
          value: "Bachelor of Applied Science",
        },
        {
          id: "77b478e6-b11e-4376-ae87-b533d371a4e0",
          title: "Graduated",
          value: "2023",
        },
      ],
      title: "Education",
    },
  ];

  const services = [
    {
      id: "40ef3f49-4970-44ea-a67c-f2da79f24f6b",
      description:
        "I specialize in building robust, scalable front-end infrastructures using React and Next.js. My focus is on writing maintainable code that drives complex applications while ensuring a seamless developer experience.",
      title: "Web Application Development",
    },
    {
      id: "7ee74a2c-6fc7-4687-b19d-ef07d064c491",
      description:
        "Translating static designs into living, breathing interfaces. I use Tailwind CSS and motion libraries to create highly responsive experiences that delight users and strictly adhere to modern design systems.",
      title: "Interactive UI Implementation",
    },
    {
      id: "350f6f44-5728-448d-ac5f-2cbbcc51ae82",
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
    {#each backgrounds as { id, items, title } (id)}
      <article>
        <h2>{title}</h2>
        <ul>
          {#each items as { id, title, value } (id)}
            <li>
              <p>
                <strong>{title}</strong>
              </p>
              <p>{value}</p>
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
        {#each services as { id, description, title } (id)}
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
    padding-bottom: 8rem;
    width: 100%;
    height: 100%;

    @media (width >= 48rem) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "title background"
        "content content";
      gap: 0;
      row-gap: 2rem;
      padding-bottom: unset;
    }

    @media (width >= 80rem) {
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: "title content background";
      gap: 0;
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
    }
  }

  .background-section {
    display: flex;
    grid-area: background;
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
        display: grid;
        grid-template-columns: 1fr 2fr;
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
        color: var(--color-neutral-11);
        font-size: var(--body-medium);

        &:last-of-type {
          text-align: right;
        }
      }

      strong {
        color: var(--color-neutral-12);
        font-weight: 500;
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

        display: flex;
        flex-direction: column;
        gap: var(--gap);
      }

      li {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
        border-bottom-width: 1px;
        border-color: var(--color-neutral-6);
        padding-bottom: var(--gap);

        &:first-of-type {
          border-top-width: 1px;
          padding-top: var(--gap);
        }
      }

      h3 {
        font-weight: 500;
        font-size: var(--title-small);
        line-height: 1;
        letter-spacing: -0.025em;
      }

      p {
        color: var(--color-neutral-11);
      }
    }
  }
</style>

<script lang="ts">
  import { Button } from "bits-ui";
  import { cva, type VariantProps } from "class-variance-authority";

  const buttonVariants = cva("button", {
    compoundVariants: [
      {
        className: "button--primary-danger",
        intent: "primary",
        status: "danger",
      },
      {
        className: "button--secondary-danger",
        intent: "secondary",
        status: "danger",
      },
      {
        className: "button--tertiary-danger",
        intent: "tertiary",
        status: "danger",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
    variants: {
      fullWidth: {
        true: "button--full-width",
      },
      iconOnly: {
        true: "button--icon-only",
      },
      intent: {
        primary: "button--primary",
        secondary: "button--secondary",
        tertiary: "button--tertiary",
      },
      size: {
        large: "button--large",
        medium: "button--medium",
        small: "button--small",
      },
      status: {
        danger: "button--danger",
      },
    },
  });

  type ButtonProps = Button.RootProps & VariantProps<typeof buttonVariants>;

  let { intent, iconOnly, fullWidth, size, status, ...props }: ButtonProps =
    $props();
</script>

<Button.Root
  {...props}
  class={[
    buttonVariants({
      intent,
      iconOnly,
      fullWidth,
      size,
      status,
    }),
    props.class,
  ]}
/>

<style>
  :global {
    .button {
      position: relative;
      display: inline flex;
      column-gap: var(--button-column-gap);
      align-items: center;
      justify-content: center;
      padding-block: var(--button-padding-block);
      padding-inline: var(--button-padding-inline);
      overflow: hidden;
      font-weight: 500;
      line-height: 1;
      letter-spacing: normal;
      cursor: pointer;
      user-select: none;
      outline: transparent;
      border-radius: calc(infinity * 1px);
      isolation: isolate;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      transition-property: color, background-color, border-color, outline-color,
        text-decoration-color;

      &:focus-visible {
        z-index: 10;
        outline-width: 3px;
        outline-style: solid;
        outline-color: var(--color-primary-8);
        outline-offset: 1px;
      }

      svg {
        flex-shrink: 0;
        width: 1em;
        height: 1em;
      }
    }

    .button--primary {
      color: var(--color-light);
      background-color: var(--color-primary-9);

      &:active {
        background-color: var(--color-primary-11);
      }

      &:hover {
        background-color: var(--color-primary-10);
      }
    }

    .button--primary-danger {
      color: var(--color-light);
      background-color: var(--color-danger-9);

      &:active {
        background-color: var(--color-danger-11);
      }

      &:hover {
        background-color: var(--color-danger-10);
      }
    }

    .button--secondary {
      color: var(--color-neutral-12);
      background-color: var(--color-neutral-3);

      &:active {
        background-color: var(--color-neutral-5);
      }

      &:hover {
        background-color: var(--color-neutral-4);
      }
    }

    .button--secondary-danger {
      color: var(--color-danger-9);
      background-color: var(--color-neutral-3);
    }

    .button--tertiary {
      color: var(--color-neutral-12);
      background-color: transparent;

      &:active {
        background-color: var(--color-neutral-5);
      }

      &:hover {
        background-color: var(--color-neutral-4);
      }
    }

    .button--tertiary-danger {
      color: var(--color-danger-9);
    }

    .button--icon-only {
      aspect-ratio: 1 / 1;
      padding: var(--button-padding-block);
    }

    .button--full-width {
      width: 100%;
    }

    .button--danger {
      &:focus-visible {
        outline-color: var(--color-danger-8);
      }
    }

    .button--small {
      --button-padding-block: 0.5em;
      --button-padding-inline: 0.8em;
      --button-column-gap: calc(var(--button-padding-inline) / 2);

      font-size: var(--label-medium);
    }

    .button--medium {
      --button-padding-block: 0.8em;
      --button-padding-inline: 1.1em;
      --button-column-gap: calc(var(--button-padding-inline) / 2);

      font-size: var(--label-large);
    }

    .button--large {
      --button-padding-block: 1.1em;
      --button-padding-inline: 1.4em;
      --button-column-gap: calc(var(--button-padding-inline) / 2);

      font-size: var(--label-large);
    }
  }
</style>

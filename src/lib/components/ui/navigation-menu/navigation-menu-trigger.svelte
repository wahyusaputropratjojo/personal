<script lang="ts">
  import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
  import { NavigationMenu } from "bits-ui";

  interface Props extends NavigationMenu.TriggerProps {}

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: Props = $props();
</script>

<NavigationMenu.Trigger
  class={["navigation-menu__trigger", className]}
  data-slot="navigation-menu-trigger"
  bind:ref
  {...props}
>
  {@render children?.()}
  <ChevronDownIcon aria-hidden="true" />
</NavigationMenu.Trigger>

<style>
  :global {
    .navigation-menu__trigger {
      display: inline-flex;
      gap: 0.25rem;
      align-items: center;
      justify-content: center;
      width: max-content;
      min-height: 2rem;
      padding: 0.2rem 0.5rem;
      font-size: var(--label-medium);
      font-weight: var(--weight-medium);
      line-height: var(--leading-normal);
      color: var(--color-neutral-11);
      letter-spacing: var(--tracking-normal);
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      outline-color: transparent;
      border-radius: calc(infinity * 1px);
      transition: color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;

      svg {
        width: 1em;
        height: 1em;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        transition-property: rotate;
      }

      &[data-state="open"] {
        svg {
          rotate: 180deg;
        }
      }

      &:disabled {
        pointer-events: none;
        opacity: 50%;
      }

      &:hover {
        color: var(--color-neutral-12);
        background-color: var(--color-neutral-4);
      }

      &:focus-visible {
        color: var(--color-neutral-12);
        outline-width: 3px;
        outline-style: solid;
        outline-color: var(--color-primary-8);
        outline-offset: 1px;
        background-color: var(--color-neutral-4);
      }

      &[data-active] {
        color: var(--color-primary-12);
        background-color: var(--color-primary-5);
      }
    }
  }
</style>

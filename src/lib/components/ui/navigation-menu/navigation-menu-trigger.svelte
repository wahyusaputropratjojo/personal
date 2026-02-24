<script lang="ts">
  import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
  import { NavigationMenu } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: NavigationMenu.TriggerProps = $props();
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
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      transition: color;
      transition-duration: 150ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      outline-color: transparent;
      border-radius: calc(infinity * 1px);
      padding: 0.2rem 0.5rem;
      width: max-content;
      min-height: 2rem;
      color: var(--color-neutral-11);
      font-weight: var(--weight-medium);
      font-size: var(--label-medium);
      line-height: var(--leading-normal);
      letter-spacing: var(--tracking-normal);
      user-select: none;
      text-decoration: none;

      svg {
        transition-duration: 150ms;
        transition-property: rotate;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        width: 1em;
        height: 1em;
      }

      &[data-state="open"] {
        svg {
          rotate: 180deg;
        }
      }

      &:disabled {
        opacity: 50%;
        pointer-events: none;
      }

      &:hover {
        background-color: var(--color-neutral-4);
        color: var(--color-neutral-12);
      }

      &:focus-visible {
        outline-color: var(--color-primary-8);
        outline-style: solid;
        outline-width: 3px;
        outline-offset: 1px;
        background-color: var(--color-neutral-4);
        color: var(--color-neutral-12);
      }

      &[data-active] {
        background-color: var(--color-primary-5);
        color: var(--color-primary-12);
      }
    }
  }
</style>

<script lang="ts">
  import { NavigationMenu } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...props
  }: NavigationMenu.ContentProps = $props();
</script>

<NavigationMenu.Content
  class={["navigation-menu__content", className]}
  data-slot="navigation-menu-content"
  bind:ref
  {...props}
/>

<style>
  :global {
    .navigation-menu__content {
      position: absolute;
      top: 0;
      left: 0;
      color: var(--color-neutral-12);
      background-color: var(--color-neutral-2);
      border-radius: 1rem;
      animation-duration: 250ms;
      animation-timing-function: ease;

      @media (width >= 40rem) {
        width: auto;
      }

      &[data-motion="from-start"] {
        animation-name: enter-from-left;
      }

      &[data-motion="from-end"] {
        animation-name: enter-from-right;
      }

      &[data-motion="to-start"] {
        animation-name: exit-to-left;
      }

      &[data-motion="to-end"] {
        animation-name: exit-to-right;
      }
    }

    @keyframes enter-from-right {
      from {
        opacity: 0;
        transform: translateX(200px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes enter-from-left {
      from {
        opacity: 0;
        transform: translateX(-200px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes exit-to-right {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(200px);
      }
    }

    @keyframes exit-to-left {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(-200px);
      }
    }
  }
</style>

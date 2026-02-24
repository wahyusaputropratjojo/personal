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
      animation-duration: 250ms;
      animation-timing-function: ease;
      border-radius: 1rem;
      background-color: var(--color-neutral-2);
      color: var(--color-neutral-12);

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
        transform: translateX(200px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes enter-from-left {
      from {
        transform: translateX(-200px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes exit-to-right {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(200px);
        opacity: 0;
      }
    }

    @keyframes exit-to-left {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(-200px);
        opacity: 0;
      }
    }
  }
</style>

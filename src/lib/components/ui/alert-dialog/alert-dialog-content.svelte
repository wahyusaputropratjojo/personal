<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import AlertDialogPortal from "./alert-dialog-portal.svelte";
  import AlertDialogOverlay from "./alert-dialog-overlay.svelte";
  import type { ComponentProps } from "svelte";

  type Props = Omit<ComponentProps<typeof AlertDialog.Content>, "child"> & {
    portalProps?: Omit<
      ComponentProps<typeof AlertDialogPortal>,
      "child" | "children"
    >;
  };

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    ...props
  }: Props = $props();
</script>

<AlertDialogPortal {...portalProps}>
  <AlertDialogOverlay />
  <AlertDialog.Content
    bind:ref
    data-slot="alert-dialog-content"
    class={["alert-dialog__content", className]}
    {...props}
  />
</AlertDialogPortal>

<style>
  :global() {
    .alert-dialog__content {
      display: grid;
      position: fixed;
      top: 50%;
      left: 50%;
      gap: 1rem;
      transform: translate(-50%, -50%);
      z-index: 50;
      transition-duration: 200ms;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
      border: 1px solid var(--border, #e5e7eb);
      border-radius: 0.5rem;
      background-color: var(--background, #ffffff);
      padding: 1.5rem;
      width: 100%;
      max-width: calc(100% - 2rem);

      @media (min-width: 640px) {
        max-width: 32rem;
      }

      &[data-state="open"] {
        animation: alert-content-in 200ms ease-out;
      }

      &[data-state="closed"] {
        animation: alert-content-out 200ms ease-in;
      }
    }

    @keyframes alert-content-in {
      from {
        transform: translate(-50%, -50%) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    @keyframes alert-content-out {
      from {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      to {
        transform: translate(-50%, -50%) scale(0.95);
        opacity: 0;
      }
    }
  }
</style>

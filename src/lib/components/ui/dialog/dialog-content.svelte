<script lang="ts">
  import DialogPortal from "./dialog-portal.svelte";
  import DialogOverlay from "./dialog-overlay.svelte";
  import { Dialog } from "bits-ui";
  import XIcon from "@lucide/svelte/icons/x";
  import type { Snippet, ComponentProps } from "svelte";

  export type DialogContentProps = Omit<
    Dialog.ContentProps,
    "child" | "children"
  > & {
    portalProps?: Omit<
      ComponentProps<typeof DialogPortal>,
      "child" | "children"
    >;
    children: Snippet;
    showCloseButton?: boolean;
  };

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    children,
    showCloseButton = true,
    ...props
  }: DialogContentProps = $props();
</script>

<DialogPortal {...portalProps}>
  <DialogOverlay />
  <Dialog.Content
    bind:ref
    data-slot="dialog-content"
    class={["dialog__content", className]}
    {...props}
  >
    {@render children?.()}
    {#if showCloseButton}
      <Dialog.Close class="dialog__close">
        <XIcon />
        <span class="dialog__sr-only">Close</span>
      </Dialog.Close>
    {/if}
  </Dialog.Content>
</DialogPortal>

<style>
  :global {
    .dialog__content {
      display: grid;
      position: fixed;
      top: 50%;
      left: 50%;
      gap: 1rem;
      transform: translate(-50%, -50%);
      z-index: 50;
      transition-duration: 200ms;
      box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      background-color: var(--background);
      padding: 1.5rem;
      width: 100%;
      max-width: calc(100% - 2rem);

      @media (min-width: 640px) {
        max-width: 32rem;
      }

      &[data-state="open"] {
        animation: dialog-content-in 200ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }

      &[data-state="closed"] {
        animation: dialog-content-out 200ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }
    }

    .dialog__close {
      position: absolute;
      top: 1rem;
      opacity: 0.7;
      transition: opacity 0.2s;
      inset-inline-end: 1rem;
      outline: none;
      border-radius: 0.125rem;

      &:hover {
        opacity: 1;
      }

      &:focus {
        box-shadow:
          0 0 0 2px var(--background),
          0 0 0 4px hsl(var(--ring));
      }

      &:disabled {
        pointer-events: none;
      }

      & svg {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
      }
    }

    .dialog__sr-only {
      position: absolute;
      margin: -1px;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border-width: 0;
      white-space: nowrap;
    }

    @keyframes dialog-content-in {
      from {
        transform: translate(-50%, -50%) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    @keyframes dialog-content-out {
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

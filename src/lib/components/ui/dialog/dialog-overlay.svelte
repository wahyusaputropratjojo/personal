<script lang="ts">
  import { Dialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Dialog.Overlay>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<Dialog.Overlay
  bind:ref
  data-slot="dialog-overlay"
  class={["dialog__overlay", className]}
  {...props}
/>

<style>
  :global {
    .dialog__overlay {
      position: fixed;
      z-index: 50;
      inset: 0;
      background-color: rgb(0 0 0 / 0.5);

      &[data-state="open"] {
        animation: dialog-overlay-in 150ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }

      &[data-state="closed"] {
        animation: dialog-overlay-out 150ms cubic-bezier(0.16, 1, 0.3, 1)
          forwards;
      }
    }

    @keyframes dialog-overlay-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes dialog-overlay-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
</style>

<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Overlay>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<AlertDialog.Overlay
  bind:ref
  data-slot="alert-dialog-overlay"
  class={["alert-dialog__overlay", className]}
  {...props}
/>

<style>
  :global() {
    .alert-dialog__overlay {
      position: fixed;
      z-index: 50;
      inset: 0;
      background-color: rgb(0 0 0 / 0.5);

      &[data-state="open"] {
        animation: alert-dialog-fade-in 200ms ease-out;
      }

      &[data-state="closed"] {
        animation: alert-dialog-fade-out 200ms ease-in;
      }
    }

    @keyframes alert-dialog-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes alert-dialog-fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
</style>

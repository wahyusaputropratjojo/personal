<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Title>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<AlertDialog.Title
  bind:ref
  data-slot="alert-dialog-title"
  class={["alert-dialog__title", className]}
  {...props}
/>

<style>
  :global() {
    .alert-dialog__title {
      margin: 0;
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
</style>

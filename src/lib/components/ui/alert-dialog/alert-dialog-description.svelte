<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Description>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<AlertDialog.Description
  bind:ref
  data-slot="alert-dialog-description"
  class={["alert-dialog__description", className]}
  {...props}
/>

<style>
  :global() {
    .alert-dialog__description {
      margin: 0;
      color: var(--muted-foreground, #6b7280);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
</style>

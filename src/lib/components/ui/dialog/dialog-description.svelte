<script lang="ts">
  import { Dialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof Dialog.Description>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<Dialog.Description
  bind:ref
  data-slot="dialog-description"
  class={["dialog__description", className]}
  {...props}
/>

<style>
  :global {
    .dialog__description {
      color: hsl(var(--muted-foreground));
      font-size: 0.875rem;
    }
  }
</style>

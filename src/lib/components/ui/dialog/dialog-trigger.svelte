<script lang="ts">
  import { Dialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Dialog.Trigger>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<Dialog.Trigger
  bind:ref
  data-slot="dialog-trigger"
  class={className ? ["dialog__trigger", className] : undefined}
  {...props}
/>

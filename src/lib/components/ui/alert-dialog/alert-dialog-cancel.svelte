<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import { buttonVariants } from "$lib/components/ui/button.svelte";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Cancel>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<AlertDialog.Cancel
  bind:ref
  data-slot="alert-dialog-cancel"
  class={[buttonVariants({ intent: "secondary" }), className]}
  {...props}
/>

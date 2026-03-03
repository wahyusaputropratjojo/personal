<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import { buttonVariants } from "$lib/components/ui/button.svelte";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Action>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<AlertDialog.Action
  bind:ref
  data-slot="alert-dialog-action"
  class={[buttonVariants(), className]}
  {...props}
/>

<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Trigger>;

  let { ref = $bindable(null), ...props }: Props = $props();
</script>

<AlertDialog.Trigger bind:ref data-slot="alert-dialog-trigger" {...props} />

<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Root>;

  let { open = $bindable(false), ...props }: Props = $props();
</script>

<AlertDialog.Root bind:open {...props} />

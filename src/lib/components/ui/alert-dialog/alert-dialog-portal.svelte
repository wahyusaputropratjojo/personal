<script lang="ts">
  import { AlertDialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof AlertDialog.Portal>;

  let props: Props = $props();
</script>

<AlertDialog.Portal {...props} />

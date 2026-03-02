<script lang="ts">
  import { Dialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Dialog.Portal>;

  let { ...props }: Props = $props();
</script>

<Dialog.Portal {...props} />

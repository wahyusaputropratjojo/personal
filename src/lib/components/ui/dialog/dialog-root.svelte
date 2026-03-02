<script lang="ts">
  import { Dialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Dialog.Root>;

  let { open = $bindable(false), ...props }: Props = $props();
</script>

<Dialog.Root bind:open {...props} />

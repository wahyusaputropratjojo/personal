<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DropdownMenu.Root>;

  let { open = $bindable(false), ...props }: Props = $props();
</script>

<DropdownMenu.Root bind:open {...props} />

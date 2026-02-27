<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof DropdownMenu.Sub>;

  let { open = $bindable(false), ...props }: Props = $props();
</script>

<DropdownMenu.Sub bind:open {...props} />

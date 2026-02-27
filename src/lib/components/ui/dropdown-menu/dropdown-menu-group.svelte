<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DropdownMenu.Group>;

  let { ref = $bindable(null), ...props }: Props = $props();
</script>

<DropdownMenu.Group bind:ref data-slot="dropdown-menu-group" {...props} />

<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof DropdownMenu.Trigger>;

  let { ref = $bindable(null), ...props }: Props = $props();
</script>

<DropdownMenu.Trigger bind:ref data-slot="dropdown-menu-trigger" {...props} />

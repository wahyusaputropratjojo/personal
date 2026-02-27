<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DropdownMenu.Portal>;

  let props: Props = $props();
</script>

<DropdownMenu.Portal {...props} />

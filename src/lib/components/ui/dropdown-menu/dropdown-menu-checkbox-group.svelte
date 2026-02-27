<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DropdownMenu.CheckboxGroup>;

  let {
    ref = $bindable(null),
    value = $bindable([]),
    ...props
  }: Props = $props();
</script>

<DropdownMenu.CheckboxGroup
  bind:ref
  bind:value
  data-slot="dropdown-menu-checkbox-group"
  {...props}
/>

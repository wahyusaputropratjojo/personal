<script lang="ts">
  import { DropdownMenu } from "bits-ui";
  import type { ComponentProps } from "svelte";

  export type Props = ComponentProps<typeof DropdownMenu.RadioGroup>;

  let {
    ref = $bindable(null),
    value = $bindable(),
    ...props
  }: Props = $props();
</script>

<DropdownMenu.RadioGroup
  bind:ref
  bind:value
  data-slot="dropdown-menu-radio-group"
  {...props}
/>

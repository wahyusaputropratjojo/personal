<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof DialogPrimitive.Close>;

  let { ref = $bindable(null), ...props }: Props = $props();
</script>

<DialogPrimitive.Close bind:ref data-slot="dialog-close" {...props} />

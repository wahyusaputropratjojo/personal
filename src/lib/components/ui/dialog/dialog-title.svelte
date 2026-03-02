<script lang="ts">
  import { Dialog } from "bits-ui";
  import type { ComponentProps } from "svelte";

  type Props = ComponentProps<typeof Dialog.Title>;

  let { ref = $bindable(null), class: className, ...props }: Props = $props();
</script>

<Dialog.Title
  bind:ref
  data-slot="dialog-title"
  class={["dialog__title", className]}
  {...props}
/>

<style>
  :global {
    .dialog__title {
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1;
    }
  }
</style>

<script lang="ts" module>
  export type SeparatorProps = Separator.RootProps;
</script>

<script lang="ts">
  import { Separator } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...props
  }: SeparatorProps = $props();
</script>

<Separator.Root
  bind:ref
  data-slot="separator"
  class={["separator", className]}
  {...props}
/>

<style>
  :global {
    .separator {
      flex-shrink: 0;
      background-color: var(--color-neutral-6, gray);

      &[data-orientation="horizontal"] {
        min-width: 100%;
        height: 1px;
      }

      &[data-orientation="vertical"] {
        width: 1px;
        min-height: 100%;
      }
    }
  }
</style>

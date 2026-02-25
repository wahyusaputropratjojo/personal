<script lang="ts" module>
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldProps = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldProps = $props();
</script>

<div
  bind:this={ref}
  role="group"
  data-slot="field"
  class={["field", className]}
  {...props}
>
  {@render children?.()}
</div>

<style>
  :global {
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      width: 100%;

      & > * {
        width: 100%;
      }

      &[data-invalid="true"] {
        color: var(--color-danger-9);
      }
    }
  }
</style>

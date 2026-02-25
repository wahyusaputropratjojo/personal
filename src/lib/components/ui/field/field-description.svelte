<script lang="ts" module>
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldDescriptionProps = SvelteHTMLElements["p"] & {
    ref?: HTMLParagraphElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldDescriptionProps = $props();
</script>

<p
  bind:this={ref}
  data-slot="field-description"
  class={["field__description", className]}
  {...props}
>
  {@render children?.()}
</p>

<style>
  :global {
    .field__description {
      color: var(--color-neutral-11, gray);
      font-weight: 400;
      font-size: var(--body-small, 0.875rem);
      line-height: 1.5;

      & > a {
        text-decoration-line: underline;
        text-underline-offset: 4px;

        &:hover {
          color: var(--color-primary-9, blue);
        }
      }
    }
  }
</style>

<script lang="ts" module>
  import type { HTMLTextareaAttributes } from "svelte/elements";

  export type TextareaProps = HTMLTextareaAttributes & {
    ref?: HTMLTextAreaElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    ...props
  }: TextareaProps = $props();
</script>

<textarea bind:this={ref} class={["textarea", className]} bind:value {...props}
></textarea>

<style>
  :global {
    .textarea {
      outline-color: transparent;
      outline-style: solid;
      outline-width: 3px;
      outline-offset: 1px;
      border: 1px solid var(--color-neutral-6);
      border-radius: 0.5rem;
      background-color: var(--color-neutral-2);
      padding-inline: 0.75rem;
      padding-block: 0.5rem;
      min-height: 7.5rem;
      font-size: var(--body-medium);
      line-height: 1.5;
      letter-spacing: normal;

      &:focus-visible {
        outline-color: var(--color-primary-8);
      }
    }
  }
</style>

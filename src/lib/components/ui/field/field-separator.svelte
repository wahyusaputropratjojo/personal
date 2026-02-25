<script lang="ts" module>
  import type { Snippet } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldSeparatorProps = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
    children?: Snippet;
  };
</script>

<script lang="ts">
  import Separator from "$lib/components/ui/separator.svelte";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...props
  }: FieldSeparatorProps = $props();

  const hasContent = $derived(!!children);
</script>

<div
  bind:this={ref}
  data-slot="field-separator"
  data-content={hasContent}
  class={["field__separator", className]}
  {...props}
>
  <Separator class="field__separator-line" />

  {#if children}
    <span class="field__separator-content" data-slot="field-separator-content">
      {@render children()}
    </span>
  {/if}
</div>

<style>
  :global {
    .field__separator {
      position: relative;
      margin-top: -0.5rem;
      margin-bottom: -0.5rem;
      height: 1.25rem;
      font-size: var(--body-medium);
    }

    [data-slot="field-group"][data-variant="outline"] .field__separator {
      margin-bottom: -0.5rem;
    }

    .field__separator-line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
    }

    .field__separator-content {
      display: block;
      position: relative;
      margin-right: auto;
      margin-left: auto;
      background-color: var(--color-neutral-12, white);
      padding: 0 0.5rem;
      width: fit-content;
      color: var(--color-neutral-11, gray);
    }
  }
</style>

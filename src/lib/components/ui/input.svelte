<script lang="ts" module>
  import type { HTMLInputAttributes } from "svelte/elements";

  export type InputProps = HTMLInputAttributes & {
    ref?: HTMLInputElement | null;
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    value = $bindable(),
    type,
    files = $bindable(),
    class: className,
    ...props
  }: InputProps = $props();
</script>

{#if type === "file"}
  <input
    bind:this={ref}
    bind:files
    bind:value
    class={["input", className]}
    type="file"
    {...props}
  />
{:else}
  <input bind:this={ref} class={["input", className]} {type} {...props} />
{/if}

<style>
  :global {
    .input {
      outline-color: transparent;
      outline-style: solid;
      outline-width: 3px;
      outline-offset: 1px;
      border: 1px solid var(--color-neutral-6);
      border-radius: 0.5rem;
      background-color: var(--color-neutral-2);
      padding-inline: 0.75rem;
      padding-block: 0.5rem;
      min-height: 2.5rem;
      font-size: var(--body-medium);
      line-height: 1;
      letter-spacing: normal;

      &:focus-visible {
        outline-color: var(--color-primary-8);
      }
    }
  }
</style>

<script lang="ts" module>
  import type { Snippet } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";

  export type FieldErrorProps = SvelteHTMLElements["div"] & {
    ref?: HTMLDivElement | null;
    children?: Snippet;
    errors?: { message?: string }[];
  };
</script>

<script lang="ts">
  let {
    ref = $bindable(null),
    class: className,
    children,
    errors,
    ...props
  }: FieldErrorProps = $props();

  const hasContent = $derived.by(() => {
    // Has slotted error
    if (children) return true;

    // No errors
    if (!errors || errors.length === 0) return false;

    // Has an error but no message
    if (errors.length === 1 && !errors[0]?.message) {
      return false;
    }

    return true;
  });

  const isMultipleErrors = $derived(errors && errors.length > 1);
  const singleErrorMessage = $derived(
    errors && errors.length === 1 && errors[0]?.message,
  );
</script>

{#if hasContent}
  <div
    bind:this={ref}
    role="alert"
    data-slot="field-error"
    class={["field__error", className]}
    {...props}
  >
    {#if children}
      {@render children()}
    {:else if singleErrorMessage}
      {singleErrorMessage}
    {:else if isMultipleErrors}
      <ul class="field__error-list">
        {#each errors ?? [] as error, index (index)}
          {#if error?.message}
            <li>{error.message}</li>
          {/if}
        {/each}
      </ul>
    {/if}
  </div>
{/if}

<style>
  :global {
    .field__error {
      display: flex;
      gap: 0.5rem;
      border-radius: 0.5rem;
      color: var(--color-danger-9, red);
      font-weight: 400;
      font-size: var(--label-medium, 0.875rem);
      line-height: 1.375;

      svg {
        width: 1em;
        height: 1em;
      }
    }

    .field__error-list {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
  }
</style>

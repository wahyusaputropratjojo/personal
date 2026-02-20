<script lang="ts">
  import { NavigationMenu } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    ...props
  }: NavigationMenu.LinkProps = $props();
</script>

<NavigationMenu.Link
  class={["", className]}
  data-slot="navigation-menu-link"
  bind:ref
  {...props}
/>

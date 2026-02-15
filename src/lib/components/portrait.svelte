<script lang="ts">
  import { animate } from "motion";
  import type { HTMLImgAttributes } from "svelte/elements";

  $effect(() => {
    animate(
      "#portrait",
      {
        clipPath: "inset(0% 0% 0% 0%)",
      },
      {
        duration: 1.5,
        ease: "anticipate",
      },
    );
  });

  let props: HTMLImgAttributes = $props();
</script>

<img id="portrait" style:clip-path="inset(0% 0% 100% 0%)" {...props} />

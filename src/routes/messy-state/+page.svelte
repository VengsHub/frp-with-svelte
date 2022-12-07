<script>
  import { onMount } from 'svelte';
  import {writable} from "svelte/store";

    const mouseDown = writable(false);

    onMount(() => {
      document.onmousedown = () => $mouseDown = true;
      document.onmouseup = () => $mouseDown = false;
    });

    // Welcher ist mehr FRP, wenn überhaupt?
</script>

<div on:mousedown={$mouseDown = true} on:mouseup={$mouseDown = false}>
    mouse is down: {$mouseDown}
</div>

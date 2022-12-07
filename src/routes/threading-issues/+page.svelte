<script>
  import {writable} from "svelte/store";

  const x = writable(0);
  $: y = $x * 2

  setTimeout(() => {$x = 1}, 1000);
  setInterval(() => {$x++}, 2000);

  // works
</script>

<div>
    x: {$x}
    y: {y}
</div>

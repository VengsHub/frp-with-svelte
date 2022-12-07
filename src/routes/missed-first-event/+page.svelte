<script>
  import {writable} from "svelte/store";

  const x = writable(0);

  setTimeout(() => $x++, 1000);

  setTimeout(() => {
    $: console.log('svelte style', $x);
  }, 3000);

  setTimeout(() => x.subscribe(a => console.log('old school', a)), 3000);
</script>

<div>
    x: {$x}
</div>

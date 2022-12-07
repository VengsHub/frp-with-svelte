<script>
  import {writable} from "svelte/store";

  let x = 1;
  const y = writable(1);

  $: console.log('x updated', x);
  $: console.log('y updated', $y);

  // above approaches have automatic unsubscribing
  // below approach does not
  y.subscribe(a => console.log('manual subscribe trigger', a));

  setInterval(() => {
    x++;
    $y++;
  }, 1000);
</script>

<div>
    x: {x}
    y: {$y}
</div>

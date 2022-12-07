<script>
  import {derived, writable} from "svelte/store";

  const x = writable(0);
  const y = derived(x, newX => 2 * newX);

  const mergedValue = derived([x, y], ([newX, newY]) => {
    return newX + newY;
  });
  
  $: console.log('x', $x);
  $: console.log('y', $y);
  $: console.log('merge', $mergedValue);


  let a = 0;
  $: b = 2 * a;
  $: c = a + b;

  $: console.log('a', a);
  $: console.log('b', b);
  $: console.log('c', c);

  // svelte handles batching of multiple values automatically
</script>

<div>
    x: {$x}
    y: {$y}
    mergedValue: {$mergedValue}
    <button on:click={() => $x++}>x++</button>
</div>

<div>
    a: {a}
    b: {b}
    c: {c}
    <button on:click={() => a++}>a++</button>
</div>

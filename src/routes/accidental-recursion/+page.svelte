<script>
  import {writable} from "svelte/store";

  let x = 1;
  const store = writable(1);

  $: console.log('x updated', x);
  $: x += 1;

  $: console.log('store updated', $store);
  $: store.set($store + 1);
  $: $store++;

  // approaches above work, the one below causes a full crash + a confusing error message
  /*
    # Fatal error in , line 0
    # Fatal JavaScript invalid size error 181603339
    #FailureMessage Object: 0x30e7583d0
    */
  // store.subscribe(a => store.set(a + 1));
</script>

<div>
    x: {x}
    store: {$store}
    <button on:click={() => x++}>x++</button>
    <button on:click={() => store.set($store + 1)}>store.set($store+1)</button>
    <button on:click={() => $store++}>$store++</button>
</div>

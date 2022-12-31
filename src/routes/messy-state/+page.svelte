<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { onMount$ } from '../../lib/lifecycles';
  import { fromEvent } from '../../lib/store';

  let myDiv: HTMLElement;
  const mouseDown = writable(false);

  // $: reactive statements get called once initially
  let mousedownEvent;
  $: if ($onMount$ && myDiv) mousedownEvent = fromEvent(myDiv, 'mousedown');
  $: if ($mousedownEvent) $mouseDown = true;

  let mouseupEvent;
  $: if ($onMount$ && myDiv) mouseupEvent = fromEvent(myDiv, 'mouseup');
  $: if ($mouseupEvent) $mouseDown = false;

  $: console.log('mousedown', $mouseDown);

  onMount(() => {
    // myDiv.onmousedown = () => $mouseDown = true;
    // myDiv.onmouseup = () => $mouseDown = false;
  });

  // ToDo-App mit FRP-Aufbau: Events nach außen geben, Verlinkung von Componenten über Streams

  // distinctUntilChanged behaviour works inherently in Svelte
</script>

<div style="width: 100px; height: 100px; background-color: cadetblue" bind:this={myDiv}>
</div>
<div>
    mouse is down: {$mouseDown}
</div>

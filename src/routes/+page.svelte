<script lang="ts">
	import { onMount } from 'svelte';
	import { derived, writable } from 'svelte/store';
	import { fromEvent } from '../lib/store';

	const mousePosition = writable({left: 0, top: 0});
	const draggingElement = writable<HTMLElement | undefined>();

	const dragAndDrop = derived([mousePosition, draggingElement], ([position, element]) => {
		if (element) {
			element.style.left = position.left + 'px';
			element.style.top = position.top + 'px';
		}
	});

	$dragAndDrop;
	// ^ equivalent to -> onDestroy(dragAndDrop.subscribe(() => {}));

	onMount(() => {
		document.onmousedown = event => {
			draggingElement.set(event.target as HTMLElement);
		};
		document.onmousemove = event => {
			mousePosition.set({left: event.clientX, top: event.clientY});
		};
		document.onmouseup = event => {
			draggingElement.set(undefined);
		};
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app"/>
</svelte:head>

<section>
	<div class="option">Drag me</div>
	<div class="option">Drag me</div>
	<div class="option">Drag me</div>
	<div class="option">Drag me</div>
</section>

<style lang="scss">
	.option {
		width: 40px;
		height: 40px;
		padding: 12px;
		border: 2px solid black;
		border-radius: 5px;
		font-size: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		user-select: none;
		position: absolute;

		&:hover {
			background-color: lightblue;
		}

		@for $i from 1 through 9 {
			&:nth-of-type(#{$i}) {
				left: 10 * $i + vw;
				top: 10 * $i + vh;
			}
		}
	}
</style>

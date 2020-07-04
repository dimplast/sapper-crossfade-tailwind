<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>


<div class="absolute inset-x-0 bottom-0 p-8 bg-gray-400 flex justify-between">
	<span>Dimitris Plastaras<a class="underline px-2" href="https://twitter.com/DPlastaras">Follow me on twitter</a></span>
	<a class="underline" href="https://github.com/dimplast/sapper-crossfade-tailwind.git"> Source code for this in github</a>
</div>




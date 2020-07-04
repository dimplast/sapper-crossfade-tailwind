<script>
	import {goto} from '@sapper/app';
	import {selectedStore} from './stores';
	import { send, receive }  from '../cross';

	import { crossfade, scale } from 'svelte/transition';
	import {dest} from '../dest';
	
</script>



<div class="absolute flex-col">
	{#each dest as item, id}
		<div class="flex p-1" on:click={()=>{selectedStore.set(item); goto('/about')}}>
			<div class="cursor-pointer" in:receive={{key:item.id}}	out:send={{key:item.id}}>
				<img class="h-32 w-32" src={item.imageUrl} alt={item.imageAlt}>
			</div>
			<div in:receive={{key:item.city}}	out:send={{key:item.city}}>
				<h3 class="text-lg ml-2 font-semibold text-gray-800" >{ item.city }</h3>
				<p class="text-gray-600 ml-2">${ item.averagePrice } / night average</p>	
			</div>
		</div>
	{/each}
</div>
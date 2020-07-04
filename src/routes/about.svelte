<script>
  import {goto} from '@sapper/app';
  import {fade, slide} from 'svelte/transition';
  import {selectedStore} from './stores';
  import { send, receive }  from '../cross';
	 
	let selected = $selectedStore;
	
</script>


<div class="absolute w-full flex items-center justify-center p-1" on:click={()=>{goto('/')}}>
  	<div class="flex-col cursor-pointer">
			<div in:receive={{key:selected.id}}	out:send={{key:selected.id}}>
				<img class="max-w-lg" src={selected.imageUrl} alt="Sunset in the mountains">
			</div>
      <div in:receive={{key:selected.city}}	out:send={{key:selected.city}}>
        <h3 class="font-semibold text-2xl text-gray-800">
            { selected.city }
        </h3>
        <p class="text-gray-600">${ selected.averagePrice } / night average</p>
      </div>	
      <div in:slide={{delay:500}} out:fade={{delay:-1000}} class="mt-4">
         <a href="https://svelte.dev/" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore { selected.propertyCount } 	  						properties
				</a>
      </div>
      <div class="max-w-lg" in:fade={{delay:500}} out:fade={{delay:-1000}}>
					 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the   					1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 						 also the leap into electronic typesetting, remaining essentially unchanged. I
      </div>
	</div>		
</div>


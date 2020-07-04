
import { crossfade, fade, scale } from 'svelte/transition';
	
export const [send, receive] = crossfade({
		duration: 500,
		fallback: scale
});
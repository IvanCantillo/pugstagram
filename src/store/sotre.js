import { writable } from 'svelte/store';


const like = () => {
    const { subscribe, update } = writable(0);

    return {
        subscribe,
        increment: () => update( n => n + 1 ),
        decrease: () => update( n => n - 1 ),
    }
}

export const likeCount = like();


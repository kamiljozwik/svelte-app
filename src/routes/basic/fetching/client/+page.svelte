<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';

    let todo: any = null;

    onMount(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        todo = await res.json();
    })
    
</script>

<h1>Client side fetching</h1>

{#if todo}
    <h2>{todo.title}</h2>
{/if}

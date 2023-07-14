<script lang="ts">
    import type { PageData } from './$types';
    import { goto, beforeNavigate } from '$app/navigation';
    
    const admin = null;

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        // showCoolAnimation();
        // programmatic navigation
        goto('/test');
    } 

    // life cycle hooks
    beforeNavigate((navigation) => {
        if (!admin) {
            navigation.cancel()
        }
    })


    
    export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
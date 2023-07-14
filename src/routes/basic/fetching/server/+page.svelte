<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>Server side fetching</h1>

{data.name}
{data.title}
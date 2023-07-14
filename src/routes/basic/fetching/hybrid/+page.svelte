<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { page } from '$app/stores';
</script>

<h1>Hybrid fetching page</h1>

<p>{data.title}</p>

<p>{$page.data.title}</p>
<p>{$page.data.hello}</p>

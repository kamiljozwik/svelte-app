<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<div class="navbar bg-base-100">
		<a href="/login" class="btn btn-ghost normal-case text-xl">Login</a>
		<a href="/kam" class="btn btn-ghost normal-case text-xl">Profile</a>
	</div>
	<slot />
</div>

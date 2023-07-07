<script lang="ts">
	import { auth } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		// This auth provides only JWT to the FE (which is OK with Firebase SDK), but wont allow us to check auth status on the server. On server we can use cookies.
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider);
		console.log(user);
	}
</script>

<h2>Login</h2>

<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>

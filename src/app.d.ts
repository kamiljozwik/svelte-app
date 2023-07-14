// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			// piece of server side state, we can access from any server side endpoints
			userID: string | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

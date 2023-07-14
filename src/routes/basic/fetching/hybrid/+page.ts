import type { PageLoad } from './$types';

// render all HTML on build time (JAM)
// export const prerender = true;

// default, SSR on first load, then SPA
// export const ssr = true;

// SPA only (render on client only)
// export const ssr = false;

// disable hydration and routing (less JS sends to client, good for i.e. "about" page, where small interactive JS is needed)
// export const csr = false

export const load = (async ({ setHeaders }) => {
	// initial load on server, but all subsequent loads on client
	// no .env variables, no Admin sdk, etc.
	// best defualt for data fetching

	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());

	setHeaders({
		'cache-control': 'max-age=60' // cache for 60 seconds. Result for load() is cached on server, so we don't need to fetch it again and maybe hits API limits
	});

	// Gdy pobieramy z API, które może mieć swoje własne ustawienia cache, możemy użyć tego. W tym przypadku API zwraca nagłówek "age", który mówi nam ile czasu minęło od ostatniego odświeżenia danych
	setHeaders({
		age: res.headers?.get('age') // get header from external API
		// 'cache-control': res.headers?.get('cache-control') // get header from external API
	});

	return {
		name: 'hybrid',
		title: 'Hybrid Page',
		hello: 'Hello store!'
	};
}) satisfies PageLoad;

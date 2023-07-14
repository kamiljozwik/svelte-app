import { adminAuth } from '$lib/server/admin';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// idToken comes from the client app, after user login with Google. We pass it here to the server to verify the user on the server.
	const { idToken } = await request.json();

	const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

	const decodedIdToken = await adminAuth.verifyIdToken(idToken);

	// Cookie powinno zostać ustawione tylko wtedy, gdy użytkownik dopiero co się zalogował (tutaj 5 minut)
	if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
		const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
		const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };

		// jeżeli hostujemy na firebase, to musimy użyć nazwy "__session" dla ciasteczka, aby firebase mógł je odczytać
		cookies.set('__session', cookie, options);

		return json({ status: 'signedIn' });
	} else {
		throw error(401, 'Recent sign in required!');
	}
};

export const DELETE: RequestHandler = async ({ cookies }) => {
	cookies.delete('__session', { path: '/' });
	return json({ status: 'signedOut' });
};

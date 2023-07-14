import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import { error, redirect } from '@sveltejs/kit';

export const load = (async ({ locals, params }) => {
	// easy access to user data! It is set on src\hooks.server.ts
	const uid = locals.userID;

	if (!uid) {
		throw redirect(301, '/login');
	}

	const userDoc = await adminDB.collection('users').doc(uid).get();
	const { username, bio } = userDoc.data()!;

	if (params.username !== username) {
		throw error(401, 'That username does not belong to you');
	}

	return {
		bio
	};
}) satisfies PageServerLoad;

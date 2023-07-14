import type { PageServerLoad } from './$types';
import { adminDB } from '$lib/server/admin';
import { error, redirect, type Actions, fail } from '@sveltejs/kit';

export const load = (async ({ locals, params }) => {
	// easy access to user data! It is set on src\hooks.server.ts
	const uid = locals.userID;

	console.log('user id', uid);

	if (!uid) {
		console.log(uid);

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

export const actions = {
	// default action, because we have only one action
	default: async ({ locals, request, params }) => {
		const uid = locals.userID;

		const data = await request.formData();
		const bio = data.get('bio');

		const userRef = adminDB.collection('users').doc(uid!);
		const { username } = (await userRef.get()).data()!;

		if (params.username !== username) {
			throw error(401, 'That username does not belong to you');
		}

		// walidacja pola w formularzu
		if (bio!.length > 260) {
			return fail(400, { problem: 'Bio must be less than 260 characters' });
		}

		await userRef.update({
			bio
		});
	}
} satisfies Actions;

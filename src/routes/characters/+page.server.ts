import * as api from '~/lib/api/characters/getCharacters';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const characters = await api.getCharacters();
	return { characters };
}

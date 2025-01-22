import * as api from '~/lib/api/characters/getCharacters';

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
  const pageParam = url.searchParams.get('page');
  const page = Number.parseInt(pageParam || '1');
	const characters = await api.getCharacters(page);
	return { characters };
}

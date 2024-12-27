import * as api from '~/lib/api/character/getCharacter';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const character = await api.getCharacter(params.id);
  return { character };
}
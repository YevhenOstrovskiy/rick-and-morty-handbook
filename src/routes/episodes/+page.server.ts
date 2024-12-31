import * as api from '~/lib/api/episodes/getEpisodes';

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
  const pageParam = url.searchParams.get('page');
  const page = Number.parseInt(pageParam || '1');

  const episodes = await api.getEpisodes(page);
  return { episodes };
}
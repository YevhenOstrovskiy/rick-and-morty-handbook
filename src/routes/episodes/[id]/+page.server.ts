import * as api from '~/lib/api/episode/getEpisode';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const episode = await api.getEpisode(params.id);

  console.log('Episode:', episode);
  return { episode };
}
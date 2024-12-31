import { createUrqlClient } from '~/lib/api/urql-client';
import { QUERY } from '~/lib/api/episodes';

export async function getEpisodes(page: number) {
  const { client } = createUrqlClient();

  const result = await client.query(QUERY(page), {}).toPromise();

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data.episodes;
}
import { createUrqlClient } from '~/lib/api/urql-client';
import { QUERY } from '~/lib/api/seasons';

export async function getAllEpisodesInSeason(ids: number[]) {
  const { client } = createUrqlClient();
    const result = await client.query(QUERY, {ids}).toPromise();
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result.data.episodesByIds;
}
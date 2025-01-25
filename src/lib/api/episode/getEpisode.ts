import { createUrqlClient } from '~/lib/api/urql-client';
import { QUERY } from '~/lib/api/episode';

  export async function getEpisode(id: string) {
    const { client } = createUrqlClient();
  
    const result = await client.query(QUERY(id), {}).toPromise();
  
    if (result.error) {
      throw new Error(result.error.message);
    }
  
    return result.data.episode;
  }
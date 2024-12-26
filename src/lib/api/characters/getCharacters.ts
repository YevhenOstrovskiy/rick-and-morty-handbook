import { createUrqlClient } from '~/lib/api/urql-client';
import { QUERY } from '~/lib/api/characters';

  export async function getCharacters() {
    const { client } = createUrqlClient();
  
    const result = await client.query(QUERY, {}).toPromise();
  
    if (result.error) {
      throw new Error(result.error.message);
    }
  
    return result.data.characters.results;
  }
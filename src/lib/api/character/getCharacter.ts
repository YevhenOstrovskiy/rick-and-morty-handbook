import { createUrqlClient } from '~/lib/api/urql-client';
import { QUERY } from '~/lib/api/character';

  export async function getCharacter(id: string) {
    const { client } = createUrqlClient();
  
    const result = await client.query(QUERY(id), {}).toPromise();
  
    if (result.error) {
      throw new Error(result.error.message);
    }
  
    return result.data.character;
  }
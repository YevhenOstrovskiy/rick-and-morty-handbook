import type Card from '~/lib/types/card';

export default interface Episode {
  id: number;
  name: string;
  air_date?: string;
  episode: string;
  characters: Card[];

}
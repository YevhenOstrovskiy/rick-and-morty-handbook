import type Character from '~/lib/types/character';

export default interface Episode {
  id: number;
  name: string;
  air_date?: string;
  episode: string;
  characters?: Partial<Character[]>;

}
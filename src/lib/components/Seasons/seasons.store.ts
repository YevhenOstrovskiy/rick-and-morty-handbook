import { writable } from 'svelte/store';
import type Episode from '~/lib/types/episode';
import { getAllEpisodes } from '~/lib/api/episodes/getAllEpisodes';

export const selectedSeasonId = writable<number>(1);
export const episodes = writable<Episode[]>([]);

await getAllEpisodes().then(episodes.set);
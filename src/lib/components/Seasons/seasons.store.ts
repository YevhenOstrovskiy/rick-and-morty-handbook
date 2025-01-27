import { writable } from 'svelte/store';
import type Episode from '~/lib/types/episode';
import { getThisEpisodes } from '~/lib/api/episodes/getAllEpisodes';

export const selectedSeasonId = writable<number>(1);
export const episodes = writable<Episode[]>([]);

const epis = await getThisEpisodes();
episodes.set(epis);
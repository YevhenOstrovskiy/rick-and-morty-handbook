import { writable } from 'svelte/store';
import type Episode from '~/lib/types/episode';

export const selectedSeasonId = writable<number>(1);
export const episodes = writable<Episode[]>([]);
import * as api from '~/lib/api/seasons/getAllEpisodesInSeason';
import filterEpisodesBySeason from '~/lib/helpers/filterEpisodesBySeason';
import { selectedSeasonId, episodes } from '~/lib/components/Seasons/seasons.store';
import { get } from 'svelte/store';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const episodesArray = get(episodes);
  const selectedId = get(selectedSeasonId);

  const ids = filterEpisodesBySeason(episodesArray, selectedId);
  const seasonSeries = await api.getAllEpisodesInSeason(ids);

  return { seasonSeries };
}
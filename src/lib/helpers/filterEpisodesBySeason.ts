import type Episode from '~/lib/types/episode';

export default function filterEpisodesBySeason(episodes: Episode[], season: number): number[] {
  const result = episodes.
    filter((ep) => ep.episode.includes(`S0${season}`))
    .map(ep => ep.id);
    return result;
}
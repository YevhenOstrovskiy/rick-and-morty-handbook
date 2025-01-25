<script lang="ts">
  import * as api from '~/lib/api/seasons/getAllEpisodesInSeason';
	import type Episode from '~/lib/types/episode';
	import { Episodes } from '~/lib/components/Episodes';
	import { selectedSeasonId, episodes } from '~/lib/components/Seasons/seasons.store';
	import { getAllEpisodes } from '~/lib/api/episodes/getAllEpisodes';
	import filterEpisodesBySeason from '~/lib/helpers/filterEpisodesBySeason';

  let epi: Episode[] = [];
  getAllEpisodes().then(e => episodes.set(e));
    const ids = filterEpisodesBySeason($episodes, $selectedSeasonId)
    api.getAllEpisodesInSeason(ids)
  .then((e) => {
    epi = e;
    console.log(epi);
  })
  .catch((error) => {
    throw new Error(error);
  });

</script>

<div><Episodes episodes = {epi}/></div>
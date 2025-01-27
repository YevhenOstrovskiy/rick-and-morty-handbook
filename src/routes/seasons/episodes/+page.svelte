<script lang="ts">
  import * as api from '~/lib/api/seasons/getAllEpisodesInSeason';
	import type Episode from '~/lib/types/episode';
	import { Episodes } from '~/lib/components/Episodes';
	import { selectedSeasonId, episodes } from '~/lib/components/Seasons/seasons.store';
	import filterEpisodesBySeason from '~/lib/helpers/filterEpisodesBySeason';

  let epi: Episode[] = [];
    const ids = filterEpisodesBySeason($episodes, $selectedSeasonId)
    api.getAllEpisodesInSeason(ids)
  .then((e) => {
    epi = e;
  })
  .catch((error) => {
    throw new Error(error);
  });

</script>

<div><Episodes episodes = {epi}/></div>
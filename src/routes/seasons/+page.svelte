<script lang="ts">
	import Seasons from '~/lib/components/Seasons/Seasons.svelte';
  import { seasons } from '~/lib/constants/index';
</script>

<div>
<h1> Seasons </h1>
<Seasons seasons = {seasons}/>
</div>
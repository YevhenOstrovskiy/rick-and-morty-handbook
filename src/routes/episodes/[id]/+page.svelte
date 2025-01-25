<script lang="ts">
  /** @type {{ data: import('./$types').PageServerData }} */
  import { Episode } from '~/lib/components/Episode';
  
	let { data } = $props();

</script>

<div>
  <div>
    {#if data.episode}
				<Episode episode={data.episode} />
		{:else}
			<p>Episode not found.</p>
		{/if}
  </div>
</div>
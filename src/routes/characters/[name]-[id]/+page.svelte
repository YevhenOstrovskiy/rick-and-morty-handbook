<script lang="ts">
  /** @type {{ data: import('./$types').PageServerData }} */
  import { Character } from '~/lib/components/Character/';

	let { data } = $props();
</script>

<div>
  <div>
    {#if data.character}
				<Character character={data.character} />
		{:else}
			<p>No characters found.</p>
		{/if}
  </div>
</div>
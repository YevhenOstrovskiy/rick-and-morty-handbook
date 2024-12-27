<script lang="ts">
  /** @type {{ data: import('./$types').PageServerData }} */
  import { Card } from '~/lib/components/Card/';
  
	let { data } = $props();
</script>

<div>
	<h1>Characters</h1>
	<div class="characters">
		{#if data.characters.length > 0}
			{#each data.characters as character}
				<Card character={character} />
			{/each}
		{:else}
			<p>No characters found.</p>
		{/if}
	</div>
</div>

<style>
	.characters {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>

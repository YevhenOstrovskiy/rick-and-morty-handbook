<script lang="ts">
  /** @type {{ data: import('./$types').PageServerData }} */
  import { goto } from '$app/navigation';
  import { Card } from '~/lib/components/Card/';
  import { Pagination, currentPage, totalPages } from '~/lib/components/Pagination/';

  $effect(() => {
    goto(`?page=${$currentPage}`);
  });
	let { data } = $props();

  $totalPages = data.characters.info.pages;
</script>

<div>
	<h1>Characters</h1>
	<div class="characters">
		{#if data.characters.results.length > 0}
			{#each data.characters.results as character}
				<Card character={character} />
			{/each}
		{:else}
			<p>No characters found.</p>
		{/if}
	</div>
  <Pagination/>
  <div>page c: {$currentPage}</div>
</div>

<style>
	.characters {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>

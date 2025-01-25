<script lang="ts">
  import type Episode from '~/lib/types/episode';
  import { Card } from '~/lib/components/Card/';

  export let episode: Episode;
</script>

<div class="episode-card">
  <h1 class="episode-title">{episode.name}</h1>
  <p class="episode-info">
    <strong>Episode:</strong> {episode.episode} <br />
    <strong>Air Date:</strong> {episode.air_date}
  </p>

  <h2>Characters:</h2>
  <div class="characters">
		{#if episode.characters.length > 0}
			{#each episode.characters as character}
				<Card character={character} />
			{/each}
		{:else}
			<p>No characters found.</p>
		{/if}
	</div>
</div>

<style>
  .episode-card {
    padding: 1.5rem;
    margin: 1rem auto;
    max-width: 1024px;
    background: var(--background-light, #f9f9f9);
    border: 1px solid var(--primary, #ccc);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .episode-title {
    margin: 0;
    font-size: 1.5rem;
    color: var(--primary, #333);
    text-align: center;
  }

  .episode-info {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--text-secondary, #555);
  }

  .characters {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

</style>

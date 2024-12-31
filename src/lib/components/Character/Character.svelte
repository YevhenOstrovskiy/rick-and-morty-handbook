<script lang="ts">
	import type Character from '~/lib/types/character';
  
	export let character: Character;
</script>

<article class="card">
	<img src={character.image} alt={character.name} class="character-image" />
	<div class="card-content">
		<h2>{character.name}</h2>
		<p><strong>Status:</strong> {character.status}</p>
		<p><strong>Species:</strong> {character.species}</p>
		{#if character.type}
			<p><strong>Type:</strong> {character.type}</p>
		{/if}
		<p><strong>Gender:</strong> {character.gender}</p>
		<p><strong>Origin:</strong> 
			<a href={character.origin.url}>{character.origin.name}</a>
		</p>
		<p><strong>Location:</strong> 
			<a href={character.location.url}>{character.location.name}</a>
		</p>
	</div>
</article>

<style>
	.card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 6rem;
		align-items: start;
		border: 1px solid #ddd;
		border-radius: 0.5rem;
		padding: 1rem;
		background: var(--background);
	}

	.character-image {
    width: auto;
    height: 100%;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	.card-content {
		display: flex;
		width: 320px;
		align-items: flex-start;
		flex-direction: column;
		gap: 0.5rem;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.card {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.character-image {
			width: 100%;
			height: auto;
		}

		.card-content {
			width: 100%;
			align-items: center;
		}
	}

	@media (max-width: 480px) {
		.card {
			padding: 0.5rem;
		}

		.character-image {
			width: 100%;
			height: auto;
		}

		.card-content {
			width: 100%;
			gap: 0.3rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		p {
			font-size: 0.9rem;
		}

		a {
			font-size: 0.9rem;
		}
	}
</style>

<script lang="ts">
  interface Card {
		name: string;
		image: string;
	}

	export let character: Card;
</script>

<div class="character-card">
	<img src={character.image} alt={character.name} />
	<h2>{character.name}</h2>
</div>

<style>
	.character-card {
		border: 1px solid #ddd;
		border-radius: 0.5rem;
		padding: 1rem;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.character-card img {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	.character-card h2 {
		margin-top: 0.5rem;
		font-size: 1.2rem;
	}
</style>

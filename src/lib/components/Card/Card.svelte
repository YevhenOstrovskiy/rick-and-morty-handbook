<script lang="ts">
  import type Card from '~/lib/types/card';
  import { goto } from '$app/navigation';

	export let character: Card;
  function handleClick() {
    goto(`/characters/${character.name}-${character.id}`);
	}
</script>

<div class="character-card" 
      on:click={handleClick} 
      on:keypress={() => {}} 
      role="button" 
      tabindex="0"
>
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
    cursor: pointer;
    text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
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

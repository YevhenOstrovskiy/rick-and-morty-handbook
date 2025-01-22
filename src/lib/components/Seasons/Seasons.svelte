<script lang="ts">
    import { goto } from '$app/navigation';
  import type Season from '~/lib/types/season';
  import { selectedSeasonId } from './seasons.store';
  
	export let seasons: Season[];

  const handleSeasonClick = (id: number) => {
    selectedSeasonId.set(id);
    selectedSeasonId.update;
    goto(`seasons/episodes`);
  };
</script>

<div class="seasons">
  {#each seasons as season}
    <div 
      class="season-item" 
      onclick={() => {handleSeasonClick(season.id)}}
      onkeypress={() =>{}}
      role="button"
      tabindex="0"
    >
      <img src={season.image} alt={season.name} class="season-image" />
      <p class="season-name">{season.name}</p>
    </div>
  {/each}
</div>

<style>
  .seasons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .season-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    background-color: #f9f9f9;
  }

  .season-item:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .season-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  .season-name {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    color: #333;
  }
</style>

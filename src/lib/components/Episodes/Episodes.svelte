<script lang="ts">
	import type Episode from '~/lib/types/episode';
  import { goto } from '$app/navigation';
  
	export let episodes: Episode[];
  
  const handleEpisodeClick = (id: number) => {
    console.log('Selected Episode ID:', id);
    goto(`/episodes/${id}`);
  };
</script>

<section class="container">
  <h1>Episodes</h1>
  {#if episodes.length > 0}
    <table role="grid">
      <thead>
        <tr>
          <th>Episode</th>
          <th>Name</th>
          <th>Air Date</th>
        </tr>
      </thead>
      <tbody>
        {#each episodes as { id, name, air_date, episode }}
        <tr class="episode"
          on:click={() => handleEpisodeClick(id)} 
          on:keypress={() => {}} 
          role="button"
          tabindex="0"
        >
            <td>{episode}</td>
            <td>{name}</td>
            <td>{air_date}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No episodes available.</p>
  {/if}
</section>

<style>
  .container {
    margin: 2rem auto;
    max-width: 800px;
  }

  table {
    width: 100%;
  }

  th {
    text-align: left;
  }

  td {
    padding: 0.5rem 0;
    background-color: #fff;
    cursor: pointer;
    text-decoration: none;
		color: inherit;
  }
  
  tr {
		color: inherit;
  }

  .episode {
    border: 1px solid #ddd;
		border-radius: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: var(--muted-color, #666);
  }
</style>

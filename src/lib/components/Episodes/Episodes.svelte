<script lang="ts">
	import type Episode from '~/lib/types/episode';
  
	export let episodes: Episode[];
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
        {#each episodes as { name, air_date, episode }}
          <tr>
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
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: var(--muted-color, #666);
  }
</style>

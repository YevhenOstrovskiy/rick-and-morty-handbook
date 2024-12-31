<script lang="ts">
    /** @type {{ data: import('./$types').PageServerData }} */
    import { Episodes } from '~/lib/components/Episodes/';
    import { goto } from '$app/navigation';
    import { Pagination, totalPages, currentPage } from '~/lib/components/Pagination/';

    $effect(() => {
    goto(`?page=${$currentPage}`);
  });
	let { data } = $props();

  $totalPages = data.episodes.info.pages;
</script>

<div>
  <Episodes episodes = {data.episodes.results}/>
  <Pagination
/>
</div>
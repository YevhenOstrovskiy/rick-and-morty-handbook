import { gql } from '@urql/core';
import { createUrqlClient } from '~/lib/api/urql-client';
import type Episode from '~/lib/types/episode';

export async function getAllEpisodes() {
  const { client } = createUrqlClient();
  let allEpisodes: Episode[] = [];
  let currentPage = 1;
  let totalPages = 1;

  do {
    const response = await client
      .query(Query, { page: currentPage })
      .toPromise();

    if (response.data) {
      const { info, results } = response.data.episodes;
      totalPages = info.pages;
      allEpisodes = [...allEpisodes, ...results];
    }

    currentPage++;
  } while (currentPage <= totalPages);

  return await allEpisodes;
}

export async function getThisEpisodes () {
  const result = await getAllEpisodes().then(e => e);
  return result;
}

const Query = gql`
query Episodes($page: Int) {
  episodes(page: $page) {
    info {
      pages
    }
    results {
      id
      name
      episode
    }
  }
}
`;
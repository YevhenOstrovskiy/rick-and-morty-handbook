export const QUERY = (page: number) => {
  return `
  query {
    episodes(page: ${page}, filter: {}) {
      info {
        count,
        pages
      }
      results {
        id,
        name,
        air_date,
        episode,
        characters {
          id,
          name
        }
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: []) {
      id
    }
  }
`;
}
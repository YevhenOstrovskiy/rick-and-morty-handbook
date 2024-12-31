export const QUERY = (page: number) => { 
  return `
      query {
  characters(page: ${page}, filter: { }) {
    info {
      count,
      pages
    }
    results {
      id,
      name, 
      image
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
  }
    `;
}
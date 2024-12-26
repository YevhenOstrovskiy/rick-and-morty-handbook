export const QUERY = `
    query {
characters(page: 1, filter: { }) {
  info {
    count
  }
  results {
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
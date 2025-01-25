export const QUERY = (id: string) => { 
  return `
      query {
episode(id: ${id}) {
  id,
  name,
  air_date,
  episode,
  characters {
    id,
    name,
    image
  }
},
}
    `;
}
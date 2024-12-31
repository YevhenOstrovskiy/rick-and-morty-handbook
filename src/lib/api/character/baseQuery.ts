export const QUERY = (id: string) => { 
  return `
    query {
      character(id: "${id}") {
        id,
        name,
        status,
        species,
        type,
        gender,
        origin {
          id,
          name
        },
        location {
          id,
          name
        },
        image,
        episode {
          id
        },
        created
        }
      }
  `;
}
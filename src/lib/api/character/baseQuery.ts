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
          id
        },
        location {
          id
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
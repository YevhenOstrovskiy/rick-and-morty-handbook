import { gql } from '@urql/core';

export const QUERY = gql`
  query Episodes($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
    }
  }
`;
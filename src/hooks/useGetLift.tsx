import { gql, useQuery } from '@apollo/client';
import { Lift } from '../types/generated/graphqlScheme';

export const GET_LIFT_BY_ID = gql`
  query GetLiftById($id: ID!) {
    Lift(id: $id) {
      elevationGain
      id
      name
      status
      trailAccess {
        id
        name
        status
      }
    }
  }
`;

const useGetLift = (options = {}) =>
  useQuery<{ Lift: Lift }>(GET_LIFT_BY_ID, options);

export default useGetLift;

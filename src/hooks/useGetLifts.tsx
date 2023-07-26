import { gql, useQuery } from '@apollo/client';
import { Lift } from '../types/generated/graphqlScheme';

export const GET_ALL_LIFTS = gql`
  query getAllLifts {
    allLifts {
      name
      elevationGain
      status
      id
    }
  }
`;

const useGetLifts = () => useQuery<{ allLifts: Array<Lift> }>(GET_ALL_LIFTS);

export default useGetLifts;

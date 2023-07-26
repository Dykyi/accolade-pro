import { gql, useMutation } from '@apollo/client';
import { LiftStatus } from '../types/generated/graphqlScheme';

export const UPDATE_LIFT_BY_ID = gql`
  mutation UpdateLift($id: ID!, $status: LiftStatus!) {
    setLiftStatus(id: $id, status: $status) {
      elevationGain
      name
      id
      status
      trailAccess {
        id
        name
        status
      }
    }
  }
`;

const useUpdateLift = () =>
  useMutation<any, { id: string; status: LiftStatus }>(UPDATE_LIFT_BY_ID);

export default useUpdateLift;

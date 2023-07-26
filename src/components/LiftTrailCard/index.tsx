import React, { FC } from 'react';
import { Trail } from '../../types/generated/graphqlScheme';

const LiftTrailCard: FC<Trail> = ({ name, status }) => {
  return (
    <div className='flex justify-between items-center border-2 px-5 min-h-[60px]'>
      <span>{name}</span>
      <span>{status}</span>
    </div>
  );
};

export default LiftTrailCard;

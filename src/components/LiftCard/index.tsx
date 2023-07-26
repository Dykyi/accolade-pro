import React, { FC } from 'react';
import { Lift } from '../../types/generated/graphqlScheme';

import { ReactComponent as EditIcon } from '../../icons/edit.svg';

interface IProps {
  onEdit: (id: string) => void;
}

const LiftCard: FC<IProps & Lift> = ({
  name,
  elevationGain,
  status,
  id,
  onEdit,
}) => {
  return (
    <div key={id} className='flex border-2 justify-between px-10 py-6'>
      <div className='flex flex-col items-start gap-4 w-1/3'>
        <span>{name}</span>
        <span>{elevationGain}</span>
      </div>
      <div className='flex-center w-1/3 '>
        <span>{status}</span>
      </div>
      <div className='flex items-center justify-end w-1/3'>
        <button onClick={() => onEdit(id)}>
          <EditIcon width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default LiftCard;

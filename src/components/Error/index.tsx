import React, { FC, PropsWithChildren } from 'react';

interface IProps {
  message?: string;
  retry?: () => void;
}

const Error: FC<PropsWithChildren<IProps>> = ({ message = '', retry }) => {
  return (
    <div className='absolute flex-center inset-0'>
      <p>Error : {message}</p>
      {retry && <p onClick={retry}>Try again</p>}
    </div>
  );
};

export default Error;

import React, { FC } from 'react';
import { Circles } from 'react-loader-spinner';
import './styles.css';

const Spinner: FC = () => {
  return (
    <div className='absolute flex-center inset-0'>
      <Circles
        height='60'
        width='60'
        color='rgb(229, 231, 235)'
        ariaLabel='circles-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default Spinner;

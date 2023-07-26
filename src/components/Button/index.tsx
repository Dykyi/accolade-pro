import clsx from 'clsx';
import React, { ButtonHTMLAttributes, FC } from 'react';

interface IProps {
  buttonType?: 'primary' | 'secondary';
}

const Button: FC<IProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  buttonType = 'primary',
  children,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={clsx('px-4 py-2 font-bold rounded-md text-white uppercase', {
        'bg-blue-500': buttonType === 'primary',
        'bg-red-500': buttonType === 'secondary',
        [`${className}`]: className,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

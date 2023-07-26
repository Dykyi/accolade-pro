import clsx from 'clsx';
import React, { SelectHTMLAttributes } from 'react';

interface IProps {
  values?: Array<string>;
}

const Select = React.forwardRef<
  HTMLSelectElement,
  IProps & SelectHTMLAttributes<HTMLSelectElement>
>(({ values = [], className, ...otherProps }, ref) => {
  return (
    <select
      className={clsx('border-2 p-3', {
        [`${className}`]: className,
      })}
      ref={ref}
      {...otherProps}
    >
      {values.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
});

export default Select;

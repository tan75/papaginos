import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';

const RadioButton = forwardRef(({ name, value, ...restProps }, ref) => {
  const { register } = useForm();

  return (
    <label>
      <input
        ref={ref}
        {...register(name)}
        type="radio"
        value={value}
        {...restProps}
      />
      {value}
    </label>
  );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;

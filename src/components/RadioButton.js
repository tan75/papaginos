import React, { forwardRef } from 'react';

const RadioButton = forwardRef(({ name, value, ...restProps }, ref) => {
  return (
    <label className="margin">
      <input ref={ref} type="radio" name={name} value={value} {...restProps} />
      {value}
    </label>
  );
});

RadioButton.displayName = 'RadioButton';

export default RadioButton;

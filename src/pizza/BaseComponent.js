import React, { forwardRef } from 'react';

const BaseComponent = forwardRef(({ name, value, ...restProps }, ref) => {
  return (
    <label className="margin">
      <input ref={ref} type="radio" name={name} value={value} {...restProps} />
      {value}
    </label>
  );
});

BaseComponent.displayName = 'BaseComponent';

export default BaseComponent;

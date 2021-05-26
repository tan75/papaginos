import React, { forwardRef } from 'react';

const ExtraComponent = forwardRef(({ name, value, ...restProps }, ref) => {
  return (
    <label className="margin">
      <input
        ref={ref}
        type="checkbox"
        name={name}
        value={value}
        {...restProps}
      />
      {value}
    </label>
  );
});

ExtraComponent.displayName = 'ExtraComponent';

export default ExtraComponent;

import React from 'react';

const PizzaComponent = ({
  htmlFor,
  id,
  type,
  name,
  value,
  checked,
  onChange,
  labelName,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {labelName}
      </label>
    </>
  );
};

export default PizzaComponent;

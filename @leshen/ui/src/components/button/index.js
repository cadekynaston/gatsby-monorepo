import React from 'react';

const Button = ({ children, size }) => (
  <button type="button">
    {`${size} - ${children}`}
  </button>
);

export default Button;

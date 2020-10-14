import React from 'react';
import LeshenButton from '@leshen/ui/src/components/button/index';

const Button = ({ children, size }) => (
  <LeshenButton>
    <h1>
      {children}
      {' '}
      -
      {size}
    </h1>
  </LeshenButton>
);

export default Button;

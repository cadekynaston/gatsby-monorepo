import React from 'react';
import styled from '@emotion/styled';

const Button = ({ children, size }) => (
  <StyledButton type="button">
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: tomato;
`;

export default Button;

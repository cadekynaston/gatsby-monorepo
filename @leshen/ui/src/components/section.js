// import { jsx } from "@emotion/core"
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from './button';

const Section = ({ children, className, prominent }) => (
  <StyledBoi
    prominent={prominent}
    className={className}
  >
    <h1>@Leshen/ui Section</h1>
    {children}
    <Button>Button inside Section</Button>
  </StyledBoi>
);

const StyledBoi = styled.div`
  background-color: ${(props) => (props.prominent ? 'slateblue' : 'white')};
  color: ${(props) => (props.prominent ? 'white' : 'black')};
`;

Section.defaultProps = {
  prominent: false,
};

Section.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  prominent: PropTypes.bool,
};

export default Section;

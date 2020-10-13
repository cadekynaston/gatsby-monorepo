// import { jsx } from "@emotion/core"
import React from 'react'
import styled from "@emotion/styled"
import Button from "./button"

const Section = ({ children, className }) => {
  return (
    <StyledBoi
      className={className}
    >
      <h1>@Leshen/ui Section</h1>
      {children}
      <Button>Button inside Section</Button>
    </StyledBoi>
  )
}

const StyledBoi = styled.div`
  background-color: violet;
  color: white;
`

export default Section

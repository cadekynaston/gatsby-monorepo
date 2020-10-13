/** @jsx jsx */
import { jsx } from '@emotion/core'

const Section = ({ children }) => {
  return (
    <div css={{backgroundColor: 'coral', color: 'white'}}>
      <h1>@Leshen/ui Section</h1>
      {children}
    </div>
  )
}

export default Section

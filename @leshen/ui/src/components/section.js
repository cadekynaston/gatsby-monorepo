/** @jsx jsx */
import { jsx } from '@emotion/core'

const Section = ({ children }) => {
  return (
    <div css={{backgroundColor: 'coral', color: 'white'}}>
      {children}
    </div>
  )
}

export default Section

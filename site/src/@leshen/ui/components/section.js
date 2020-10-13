/** @jsx jsx */
import { jsx } from '@emotion/core'

import LeshenSection from '@leshen/ui/src/components/section'

const Section = ({ children }) => {
  return (
    <LeshenSection css={{backgroundColor: 'green', color: 'white'}}>
      <h1>Site Section</h1>
      {children}
    </LeshenSection>
  )
}

export default Section

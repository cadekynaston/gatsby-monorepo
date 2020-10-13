import React from 'react'
import LeshenSection from '@leshen/ui/src/components/section'
import LeshenButton from '@leshen/ui/src/components/button/index'

const Section = ({ children }) => {
  return (
    <LeshenSection>
      <LeshenButton size="cade">Buttin inside Shadow</LeshenButton>
      <h1>Site Section</h1>
      {children}
    </LeshenSection>
  )
}

export default Section

import React, { Fragment } from 'react'
import { ResetStyle, GlobalStyle } from './styles/GlobalStyles'
import { CitiesTable } from './components/CitiesTable'
import { HelperClasses } from './styles/HelperClasses'

function App() {
  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />
      <HelperClasses />
      <CitiesTable />
    </Fragment>
  )
}

export default App

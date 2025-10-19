import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landingpage from './PAGES/Landingpage'
import Assignment from './PAGES/Assignment'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/Assignment' element={<Assignment/>} />
      </Routes>
    </>
  )
}

export default App
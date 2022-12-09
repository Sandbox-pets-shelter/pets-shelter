import React from 'react'
// import ReactPaginate from 'react-paginate'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { routeElements } from './configs/routeElements'

function App () {
  return (
    <div className="container">
      <Routes>
        {/*<Route path='/auth' element={<Auth />}/>*/}
        {routeElements.map(item => (
          <Route
            key={item.id}
            path={item.path}
            element={<item.component />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App

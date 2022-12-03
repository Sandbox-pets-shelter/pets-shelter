import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { routeElements } from './configs/routeElements'
// import { withLayout } from './HOC/withLayout'
import { Cat } from './pages/Pets/Cat'
// import { appRoutes} from

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
          >
            {item.id === 2 && <Route
              path={item.path}
              element={<item.component />} />}
          </Route>
        ))}
        {/* <Route
        path=':id'
        element={}/>
        <Route/>
        <Route/>
        <Route/>
        <Route>

        </Route> */}
      </Routes>
    </div>
  )
}

export default App


//Перелинковка на котов - на мне
//
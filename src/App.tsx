import './App.css'
import { Route, Routes } from 'react-router-dom'
import { routeElements } from './configs/routeElements'
import { NoMatch } from './pages/NoMatch'

function App () {
  return (
    <div className="container">
      <Routes>
        {/*Todo <Route path='/auth' element={<Auth />}/>*/}
        {routeElements.map(item => (
          <Route
            key={item.id}
            path={item.path}
            element={<item.component />}
          >
            {item.id === 2 && <><Route
              path={item.path}
              element={<item.component />} />
              </>}
          </Route>
        ))}
      </Routes>
    </div>
  )
}

export default App
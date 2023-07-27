import './App.css';
import { getRequest } from 'api';
import PopupsContainer from 'components/popups/PopupsContainer';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeElements } from './configs/routeElements';

function App() {
  useEffect(() => {
    getRequest('/pet');
  }, []);

  return (
    <div className="container">
      <Routes>
        {/*Todo <Route path='/auth' element={<Auth />}/>*/}
        {routeElements.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />}>
            {item.id === 2 && <Route path={item.path} element={<item.component />} />}
          </Route>
        ))}
      </Routes>
      <PopupsContainer />
    </div>
  );
}

export default App;

import './App.css';
import ModalsContainer from 'components/ModalsContainer';
import { Route, Routes } from 'react-router-dom';

import { routeElements } from './configs/routeElements';

function App() {
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
      <ModalsContainer />
    </div>
  );
}

export default App;

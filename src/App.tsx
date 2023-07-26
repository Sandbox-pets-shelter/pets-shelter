import './App.css';
import ModalsContainer from 'components/ModalsContainer';
import DidntFindPetSite from 'components/popups/forms/DidntFindPetSite';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { showModalAction } from 'store/modalStore/actions';
import { ModalWindows } from 'store/modalStore/reducers';

import { routeElements } from './configs/routeElements';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(showModalAction(ModalWindows.KEEP_PET_FORM)), 2000);
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
      <ModalsContainer />
    </div>
  );
}

export default App;

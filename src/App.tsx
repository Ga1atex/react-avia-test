import React, { Suspense } from 'react';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes, { routes } from './router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Suspense fallback={<Preloader />}>
          <div className="container">
            <AppRoutes routes={routes} />
          </div>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

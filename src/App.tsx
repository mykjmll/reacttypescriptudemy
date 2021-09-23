import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';
import { rootReducer } from './store/rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import startRootSaga from './store/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(startRootSaga)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <HeaderNavigation />
          <Switch>
            <Route exact component={HomePage} path={ROUTE.HOME} />
            <Route exact component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
            <Route exact component={CheckoutPage} path={ROUTE.CHECKOUT} />
            <Redirect to={ROUTE.HOME} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

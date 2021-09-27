import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export const history = createBrowserHistory()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    thunk
  ))
)

export default store;
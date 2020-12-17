import React from 'react';
import ReactDOM from 'react-dom';
import BoxPhone from './components/BoxPhone';


import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BoxPhone />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
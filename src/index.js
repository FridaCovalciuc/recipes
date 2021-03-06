import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const StoreConfig = configureStore();

ReactDOM.render(
  <StoreConfig.Provider store={StoreConfig.store}>
    <App />
  </StoreConfig.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

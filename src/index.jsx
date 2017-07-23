import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; //eslint-disable-line
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'; //eslint-disable-line
import App from './components/App'; //eslint-disable-line
import About from './components/About/About';
import Products from './components/Products/Products';
import styles from './main.scss'; //eslint-disable-line
import reducer from './mainReducer';

const rootEl = document.getElementById('root');
const store = createStore(combineReducers({
  reducer,
  routing: routerReducer,
}));
const history = syncHistoryWithStore(browserHistory, store);

const scaffold = Component => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Component}>
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
      </Route>
    </Router>
  </Provider>
);

const hotRender = Component =>
  render(
    <AppContainer>
      {scaffold(Component)}
    </AppContainer>,
    rootEl,
  );

if (module.hot) {
  hotRender(App);
  module.hot.accept('./components/App.jsx', () => {
    hotRender(App);
  });
} else {
  render(scaffold(App), rootEl);
}

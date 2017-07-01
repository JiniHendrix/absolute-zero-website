import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; //eslint-disable-line
import App from './components/App.jsx'; //eslint-disable-line
import styles from './styles/main.scss'; //eslint-disable-line

const rootEl = document.getElementById('root');

const hotRender = Component =>
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );

if (module.hot) {
  hotRender(App);
  module.hot.accept('./components/App.jsx', () => {
    hotRender(App);
  });
} else {
  render(<App />, rootEl);
}

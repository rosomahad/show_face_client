import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Routes from './routes';
import { store } from './store';

import theme from './assets/theme';

import GlobalStyle from './assets/theme/global.style';

const render = (App: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>

        <CssBaseline />

        <GlobalStyle />

        <App />

      </ThemeProvider>

    </Provider>,
    document.getElementById('root')
  );
};

render(Routes);

if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('./routes', () => {
    render(Routes);
  });
}
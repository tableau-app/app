import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'reset-css/reset.css';


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();

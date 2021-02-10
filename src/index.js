import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store';

export default function Index() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider >

    </React.StrictMode>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);


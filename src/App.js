import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { load } from './action/auth';
import { Pages } from './components/pages/Pages';
import { Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App({ load, setTheme, theme }) {
  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Pages setTheme={setTheme} theme={theme} />
      </Switch>
    </>

  );
}
App.propTypes = {
  load: PropTypes.func.isRequired,
};


export default connect(null, { load })(App);

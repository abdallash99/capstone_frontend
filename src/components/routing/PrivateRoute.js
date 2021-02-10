import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MySpinner from '../layout/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuth, isLoading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoading ? (
        <MySpinner />
      ) : isAuth ? (
        <Component {...props} />
      ) : (
            <Redirect to="/login" />
          )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);

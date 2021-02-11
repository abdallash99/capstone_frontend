import React, { useState, useEffect } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from './../../action/auth';
import Alerts from './../layout/Alerts';
import { Link } from 'react-router-dom';
const Login = ({ login, auth, history }) => {
    const [body, setBody] = useState({
        password: '',
        username: ''
    })
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    useEffect(() => {
        if (body.username.length < 6)
            setUsernameError(true)
        else setUsernameError(false);

        // eslint-disable-next-line
    }, [body.username])
    useEffect(() => {
        if (auth.isAuth)
            history.push('/');
        // eslint-disable-next-line
    }, [auth.isAuth])
    const onChange = (e) => setBody({ ...body, [e.target.name]: e.target.value });
    const handelLogin = (e) => {
        e.preventDefault()
        setLoading(true);
        login(body, setLoading);
    }
    return (
        <>
            <div className="container">
                <Alerts />
            </div>
            <div className="Login">
                <Form className='mt-5'>
                    <Form.Group controlId="formBasicusername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control size="lg" isInvalid={usernameError} value={body.username} onChange={onChange} name='username' type="username" placeholder="Enter username" />
                        <Form.Control.Feedback type="invalid">Username Should Be Greater Than 5 Charachter
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="lg" autoComplete="on" value={body.password} onChange={onChange} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button block variant="primary" disabled={loading || usernameError} size="lg" onClick={handelLogin} type="submit">
                        {loading ? <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        /> : null}{' '}
                                Login
                            </Button>
                    <div className='mt-2'>Don't have an account yet?<Link to='/signup'> Sign Up</Link> </div>
                </Form>
            </div>
        </>
    );
}
Login.propTypes = {
    login: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, { login })(Login);
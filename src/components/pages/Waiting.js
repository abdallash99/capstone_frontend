import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import MySpinner from '../layout/Spinner';
import { join, check, cancel } from './../../action/play';
const Waiting = ({ join, check, history, cancel }) => {
    const [loading, setLoading] = useState(false)

    const handelJoin = () => {
        setLoading(true);
        join();
    }

    const handelCancel = () => {
        cancel(history, setLoading);
    }

    useEffect(() => {
        check(history, setLoading)
        const interval = setInterval(() => {
            check(history, setLoading)
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        loading ? <><MySpinner msg={"Waiting For Players"} /><Button onClick={handelCancel}>Cancel</Button> </> :
            <Button onClick={handelJoin} disabled={loading}>Join Game</Button>
    )

}


export default connect(null, { join, check, cancel })(Waiting)

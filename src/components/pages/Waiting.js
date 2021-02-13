import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import MySpinner from '../layout/Spinner';
import { join, check, cancel } from './../../action/play';
const Waiting = ({ join, check, history, cancel }) => {

    const handelCancel = () => {
        cancel(history);
    }

    useEffect(() => {
        check(history)
        const interval = setInterval(() => {
            check(history)
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <><MySpinner msg={"Waiting For Players"} /><Button onClick={handelCancel}>Cancel</Button> </>
    )

}


export default connect(null, { join, check, cancel })(Waiting)

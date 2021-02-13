import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { join, check } from './../../action/play';
const JoinGame = ({ join, check, history }) => {
    const [loading, setLoading] = useState(false)

    const handelJoin = () => {
        setLoading(true);
        join(history);
    }

    useEffect(() => {
        check(history);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Button onClick={handelJoin} disabled={loading}>Join Game</Button>
    )

}


export default connect(null, { join, check })(JoinGame)

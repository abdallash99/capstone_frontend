import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios';
import MySpinner from '../layout/Spinner';
const Result = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getResult = async () => {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/result`);
            setResult(res.data)
            setLoading(false);
        }
        getResult()
        // eslint-disable-next-line
    }, [])

    if (loading)
        return <MySpinner />
    if (result && result.length === 0)
        return <h1>You Don't Play Any Game</h1>
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Game Id</th>
                    <th>Username</th>
                    <th>Result</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id.worldId}</td>
                            <td>{item.id.username}</td>
                            <td>{item.result}</td>
                            <td>{item.score}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default (Result)

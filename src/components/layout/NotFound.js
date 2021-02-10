import React, { useEffect } from 'react'

export const NotFound = ({ history }) => {
    useEffect(() => {
        setTimeout(() => {
            history.push('/login')
        }, 5000);
    })
    return (
        <h2>
            The Page you request not found
        </h2>
    )
}

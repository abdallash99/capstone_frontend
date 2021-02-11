import React from 'react'
export default function MySpinner({ msg }) {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '50vh' }}>
            <div className="spinner-border text-primary" style={{ width: '4rem', height: '4rem' }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
            {msg ? <p className="mt-3">{msg}</p> : null}
        </div>
    )
}

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
const Alerts = ({ alerts }) => {
    return (
        <div className='mt-3'>
            {
                alerts.map(({ msg, alertType, id }) => (
                    <Alert key={id} variant={alertType} >
                        {msg}
                    </Alert>
                ))
            }
        </div>

    )
}
Alert.propTypes = {
    alerts: PropTypes.array
};
const mapStateToProps = (state) => ({
    alerts: state.alert
});
export default connect(mapStateToProps)(Alerts)
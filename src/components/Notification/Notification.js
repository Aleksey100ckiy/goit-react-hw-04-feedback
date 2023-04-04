import React from "react";
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return <div className="">
                <h2>{message}</h2>
            </div>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Notification;
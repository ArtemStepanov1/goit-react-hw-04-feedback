import PropTypes from 'prop-types';

export const Notification = ( {message} ) => {
    return(
        <h4 
        style={{
            marginTop: "64px",
        }}>
            {message}
        </h4>)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
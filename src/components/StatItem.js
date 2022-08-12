import PropTypes from 'prop-types'

export const StatItem = ({text, value}) => {
    return (
        <div
        style={{
            marginBottom: "4px",
        }}>
            {text} {value}
        </div>
    )
}

StatItem.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}
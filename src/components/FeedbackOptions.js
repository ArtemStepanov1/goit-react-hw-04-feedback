import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return(
      <>
      {options.map(name => {
          return (
            <button
              key={name}
              name={name}
              onClick={() => onLeaveFeedback(name)}

              type="button"    
              style={{
                  width: "72px",
                  margin: "7px",
                  textAlign: "center",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
              }}
            >
              {name}
            </button>
          );
        })}
  
      </>
    )
    }

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
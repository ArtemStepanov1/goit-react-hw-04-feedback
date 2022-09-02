import { useState } from 'react';
import { GlobalStyle }  from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions';
import { StatItem } from './StatItem';
import { Notification } from './Notification';
import { Box } from './Box';

export const App = () => { 
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const { good, neutral, bad } = feedback;

  const countTotalFb = () => {
    return good + neutral + bad;
  };

  const countPositiveFb = () => {
    return countTotalFb() 
    ? `${Math.round((good / countTotalFb()) * 100)}%`
    : '0%';
  };

  const onLeaveFeedback = name => {
    setFeedback(state => ({
      ...state,
      [name]: state[name] + 1,
    }));
  };

  const positiveFb = countPositiveFb();
  const totalFb = countTotalFb();  
  return(
    <>
    <Box 
      as="section"
      style={{
          width: '30vw',
          height: '26vw',
          textAlign: 'center',
          marginTop: "32px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
      }}
      >
      
      <h2>Please leave feedback</h2>
      
      <Box 
      as="div"
      my="32px"
      >
        <FeedbackOptions 
          options={ Object.keys(feedback) }
          onLeaveFeedback={onLeaveFeedback}
        />
      </Box>

      <h2>Statistics</h2>
      
      <Box 
        as="div"
        mt="16px"
        >
          {!totalFb 
          ? (<Notification message={`There is no feedback :(`} />)
          : (<>
              <StatItem text={`Good:`} value={good} />
              <StatItem text={`Neutral:`} value={neutral} />
              <StatItem text={`Bad:`} value={bad} />
              <StatItem text={`Total:`} value={totalFb} />
              <StatItem text={`Positive feedback:`} value={positiveFb} />
            </>)}
      </Box>

    </Box>
    <GlobalStyle />
    </>
  )
}  
  
import { Component } from 'react';
import { GlobalStyle }  from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions';
import { StatItem } from './StatItem';
import { Notification } from './Notification';


import { Box } from './Box';

export class App extends Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFb = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFb = () => {
    return this.countTotalFb() 
    ? `${Math.round((this.state.good / this.countTotalFb()) * 100)}%`
    : '0%';
  };

  onLeaveFeedback = name => {
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFb = this.countPositiveFb();
    
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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Box>

        <h2>Statistics</h2>
        
        <Box 
          as="div"
          mt="16px"
          >
            {!total 
            ? (<Notification message={`There is no feedback :(`} />)
            : (<>
                <StatItem text={`Good:`} value={good} />
                <StatItem text={`Neutral:`} value={neutral} />
                <StatItem text={`Bad:`} value={bad} />
                <StatItem text={`Total:`} value={total} />
                <StatItem text={`Positive feedback:`} value={positiveFb} />
              </>)}
        </Box>

      </Box>
      <GlobalStyle />
      </>
    )
  }
}  
  
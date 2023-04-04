import React from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from './Section/Section';
import { Layout } from './Layout';

export class App extends React.Component{

  state = {
        good: 0,
        neutral: 0,
        bad: 0,
  };

  handleClick = (e) => {
    const evt = e;
    const name = evt.target.innerHTML.toLowerCase();
        this.setState(prevState => {
          return{[name]: prevState[name]+1}
          
        });   
    }

  countTotalFeedback (){
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
     };
    
  countPositiveFeedbackPercentage() { 
    let total = this.countTotalFeedback();
    let percent = ((this.state.good / total) * 100).toFixed();
    return percent;
    };

  render() {
    const total = this.countTotalFeedback();
       return (<Layout><Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}>
          </FeedbackOptions>
          </Section>
        <Section title="Statistics">{
          total ? ( <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>) : (<Notification message="There is no feedback"></Notification>)
        }
         
          
       </Section>  </Layout>)
        
        

};
}

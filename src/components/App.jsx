import React,{useState, useEffect} from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from './Section/Section';
import { Layout } from './Layout';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [totalPercentage, setTotalPercentage] = useState(0);


  const handleClick = event => {

    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
    
  }
  
  useEffect(() => {

      const total = good + neutral + bad;
      setTotalFeedback(total);
    
      setTotalPercentage(((good / totalFeedback) * 100).toFixed());
  
    }, [good, neutral, bad, totalFeedback]);
  
  return (<Layout><Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClick}>
          </FeedbackOptions>
          </Section>
          <Section title="Statistics">{
          totalFeedback ? ( <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={totalPercentage}></Statistics>) : (<Notification message="There is no feedback"></Notification>)
        } 
       </Section>  </Layout>)
}; 
// export class App extends React.Component{

//   state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//   };

//   handleClick = (e) => {
//     const evt = e;
//     const name = evt.target.innerHTML.toLowerCase();
//         this.setState(prevState => {
//           return{[name]: prevState[name]+1}
          
//         });   
//     }

//   countTotalFeedback (){
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//      };
    
//   countPositiveFeedbackPercentage() { 
//     let total = this.countTotalFeedback();
//     let percent = ((this.state.good / total) * 100).toFixed();
//     return percent;
//     };

//   render() {
//     const total = this.countTotalFeedback();
//        return (<Layout><Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}>
//           </FeedbackOptions>
//           </Section>
//         <Section title="Statistics">{
//           total ? ( <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>) : (<Notification message="There is no feedback"></Notification>)
//         }
         
          
//        </Section>  </Layout>)
        
        

// };
// }
// const countPositiveFeedbackPercentage = (good, totalFeedback) => {
//     return setPositiveFeedbackPer(((good / totalFeedback) * 100).toFixed());
//  }
//   countPositiveFeedbackPercentage();


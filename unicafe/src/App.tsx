import { useState } from 'react'
/**
 * 
 * @param Object props
 * @returns Statistics
 */
const Statistics = ( {good,bad,neutral} ) => {
  if( good+bad+neutral > 0 ){
    const all = good+bad+neutral; 
    const positive = good / all * 100;
    const average = all / 3;
    return (<table className="statistics"><tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positive.toFixed(2).toString() + '%'} />
    </tbody></table>)
  }
  return (<table className="statistics"><tbody><tr><td>No feedback given</td></tr></tbody></table>)
}
/**
 * 
 * @param props 
 * @returns HTML
 */
const StatisticLine = ( props ) => {
  return (<tr><td>{props.text}:</td><th>{props.value}</th></tr>);
};
/**
 * 
 * @param Object props 
 * @returns FeedBack
 */
const FeedBack = ( {text,callBack}) => {

  return (<button onClick={ () => callBack() } >{text}</button>);
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div className="feedback">
        <FeedBack text="good" callBack={() => setGood(good+1)} />
        <FeedBack text="neutral" callBack={() => setNeutral(neutral+1)} />
        <FeedBack text="bad" callBack={() => setBad(bad+1)} />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral}  />
    </div>
  )
}

export default App


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
    return (<div className="statistics">
      <p>good: {good}</p>
      <p>bad: {bad}</p>
      <p>neutral: {neutral}</p>
      <p>all: {all}</p>
      <p>average: {average.toFixed(2)}</p>
      <p>positive: {positive.toFixed(2)}%</p>
    </div>)
  }
  return (<div className="statistics">No feedback given</div>)
}
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


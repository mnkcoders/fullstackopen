import { useState } from 'react'
/**
 * 
 * @param Object props
 * @returns Statistics
 */
const Statistics = ( {good,bad,neutral} ) => {

  if( good+bad+neutral > 0 ){
    return (<div className="statistics">
      <p>good: {good}</p>
      <p>bad: {bad}</p>
      <p>neutral: {neutral}</p>
      <p>all: {neutral+good+bad}</p>
      <p>average: </p>
      <p>positive: %</p>
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


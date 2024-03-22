import { useState } from 'react'
import './App.css'

const Next = ( props ) => {

  return (<button className="button" callBack={props.callBack}>Next anecdote</button>);
}

const App = () => {
  const [selected, setSelected] = useState(0)
  //const [points,setPoints] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const points = anecdotes.map( () => 0 );

  const vote = ( ) => {
    points[selected]++;
    console.log(points);
  };

  const getVotes = () => {
    //not working, check out documentation
    return points[selected];
  };


  const getNext = () => {
    setSelected( selected < anecdotes.length - 1 ? selected + 1 : 0 )
  };

  return (
    <div>
      <h2>{anecdotes[selected]}</h2>
      <p>has {getVotes()} votes</p>
      <div><button onClick={getNext}>Next anecdote</button></div>
      <div><button onClick={vote}>Vote</button></div>
    </div>
  )
}

export default App

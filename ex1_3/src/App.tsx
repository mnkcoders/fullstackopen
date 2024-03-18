import { useState } from 'react';

const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  console.log(useState(0));

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    //setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    //setRight(right + 1)
  }

  const left = () => {
    allClicks.filter( click => click === 'L' ).length;
  }

  const right = () => {
    allClicks.filter( click => click === 'R' ).length;
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App;



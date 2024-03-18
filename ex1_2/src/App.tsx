import { useState } from 'react';


const Header = ( props ) => {
  return (
      <h1>{props.course}</h1>
  );
};

const Part = ( props ) => {
  return (
    <div>
      <p>{props.name}: {props.exercises}</p>
    </div>
  );
};

const Content = (props) => {  
  return (<div>{props.parts.map( (part , idx ) => <Part key={idx} name={part.name} exercises={part.exercises} />)}</div>);
};

const Total = (props) => {
  const total = props.exercises.map( part => part.exercises ).reduce( (a,b) => a+b , 0 );
  
  return( <p>Number of exercises: {total}</p>);
};

const App = () => {

  const [test1 , counter ] = useState(0);

  console.log( useState(0) );


  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts} />
    </div>
  )
};

export default App;



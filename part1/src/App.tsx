const Hello = ( props ) =>  {
  console.log(props);
  return (<div>
    <div><p>Hello {props.name}</p></div>
  </div>);
}
const App = () =>  {
 
  const now = new Date();
  const a = 100;
  const b = 20;
  console.log( now, a+b);
  
  return (<div>
    <h1>Greetings!!</h1>
    <Hello name="George"/>
  </div>);
}

export default App;
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick() {
    alert('Button Clicked');
  }
  const handleClick2 = () => {
    alert('Button Clicked');
  }

  const addToFive = num => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me too</button>
      <button onClick={() => { alert("clicked") }}>Click Again</button>
      <button onClick={() => addToFive(9)}>addToFive</button>
    </>
  )
}

export default App

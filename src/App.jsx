import { useState } from 'react';
import './App.css'
// import Counter from './Counter';
// import Team from './Team';
// import Users from './Users';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import MyButton from './MyButton';

function App() {
  // function handleClick() {
  //   alert('Button Clicked');
  // }
  // const handleClick2 = () => {
  //   alert('Button Clicked');
  // }

  // const addToFive = num => {
  //   alert(num + 5);
  // }

  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  }


  return (
    <>
      <h1>Counters that update together</h1>
      <MyButton counter={counter} onClick={handleClick}></MyButton>
      <MyButton counter={counter} onClick={handleClick}></MyButton>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
      {/* <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me too</button>
      <button onClick={() => { alert("clicked") }}>Click Again</button>
      <button onClick={() => addToFive(9)}>addToFive</button> */}
    </>
  )
}

export default App

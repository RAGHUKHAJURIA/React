import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    if(counter <= 20){
      setCounter(counter);
    }
    
  }

  const removeValue = () => {
    console.log("value removed", counter)
    counter = counter - 1;
    if(counter >= 1){
      setCounter(counter);
    }
    
    
  }

  return (
    
  <>
    <h1>chai aur react</h1>
    <h2>counter: {counter}</h2>
    <button onClick={addValue }>Add value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value</button>
  </>
      
  )
}

export default App

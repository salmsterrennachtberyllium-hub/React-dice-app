import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  const rollDiceHandler = () => {
    const randomValue = Math.floor(Math.random() * 6) +1;
    setValue(randomValue);
  }

  return (
    <>
    <h1>Dice Roller</h1>
    <div>{value}</div>
    <button onClick={() => rollDiceHandler()}>Roll Dice</button>
    </>
  )
}

export default App

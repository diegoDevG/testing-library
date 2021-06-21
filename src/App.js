import { useState } from 'react'
import './App.css';

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        disabled = {disabled}
        onClick={() => {setButtonColor(newButtonColor)}}
      >
        Change to { newButtonColor }
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        aria-checked={disabled}
        defaultChecked={disabled}
        onClick={() => setDisabled(!disabled)} />
     
    </div>
  );
}

export default App;

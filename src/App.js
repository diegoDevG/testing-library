import { useState } from 'react'
import './App.css';

export function replaceCamelCaseWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={disabled}
        onClick={() => { setButtonColor(newButtonColor) }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        // htmlFor property onlable bind with the input id - should be the same identifier
        aria-checked={disabled}
        defaultChecked={disabled}
        onClick={() => setDisabled(!disabled)} />
      <label htmlFor="disable-button-checkbox">Disable button</label>

    </div>
  );
}

export default App;

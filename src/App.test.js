import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial text and color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  
  //click button
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  
  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
})

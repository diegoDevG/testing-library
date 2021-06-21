import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('render a button in the page', () => {
  
  it('button is in the page', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /change to blue/i })
    expect(colorButton).toBeInTheDocument()
  })

  it('render an enabled button and no checked checkbox', () => {
    render(<App />)
    const colorButton = screen.getByRole('button', { name: /change to blue/i })
    expect(colorButton).toBeEnabled()
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('button has correct initial text and color', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /change to blue/i })
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })    
  })

  it('button change color and text on click', () => {
    render(<App />)
    const colorButton = screen.getByRole('button', { name: /change to blue/i })
    
    fireEvent.click(colorButton)
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
    
    expect(colorButton.textContent).toBe('Change to red')
  })

  test('Checkbox disables button on first click and enables on second click', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox')
    const button = screen.getByRole('button')

    fireEvent.click(checkbox)
    expect(button).toBeDisabled()

    fireEvent.click(checkbox)
    expect(button).toBeEnabled()

  })
})


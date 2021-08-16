import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelCaseWithSpace } from './App';

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
    const checkbox = screen.getByRole('checkbox', { name: /Disable button/i })
    const button = screen.getByRole('button', { name: /change to blue/i })
    expect(button).toBeEnabled()


    fireEvent.click(checkbox)
    expect(button).toBeDisabled()

    fireEvent.click(checkbox)
    expect(button).toBeEnabled()
  })
})

describe('spaces before camel-case capital letters', () => {
  //import on top the function in order to test it
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpace('Red')).toBe('Red'); // Just launch an expect for the function imported
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpace('MidnightBlue')).toBe('Midnight Blue');
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpace('MediumVioletBlue')).toBe('Medium Violet Blue');

  })
})

//Unit Testing functions
//  - for Functions that are separte from components and no covered for functional test




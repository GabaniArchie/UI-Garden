import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  render(<Button label="Click Me" />);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  
  const button = screen.getByRole('button', { name: /click me/i });
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders Button in disabled state', () => {
  render(<Button label="Disabled Button" isDisabled />);
  const button = screen.getByRole('button', { name: /disabled button/i });
  
  expect(button).toBeDisabled();
  expect(button).toHaveStyle('background-color: #ccc');
  expect(button).toHaveStyle('cursor: not-allowed');
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

// test('displays "No todos yet!" message when there are no todos', () => {
//   const { getByText } = render(<Output todos={[]} />);
//   expect(getByText(/No todos yet!/i)).toBeInTheDocument();
// });

test('adds a new todo item and deletes it', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText(/Add new todo/i);
  const addButtonElement = getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'my first to-do' } });
  fireEvent.click(addButtonElement);

  const todoElement = getByText(/my first to-do/i);
  expect(todoElement).toBeInTheDocument();

  const deleteButtonElement = getByText(/Delete/i);

  fireEvent.click(deleteButtonElement);

  
  expect(todoElement).not.toBeInTheDocument();
});

// test('marks a todo item as completed', () => {
//   const { getByText } = render(<App />);
//   const todoElement = getByText(/my first to-do/i);
//   const checkboxElement = todoElement.querySelector('input[type="checkbox"]');

//   fireEvent.click(checkboxElement);

//   expect(todoElement).toHaveClass('completed');
// });


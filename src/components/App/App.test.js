import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

test('adds a new todo item', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText(/Add new todo/i);
  const addButtonElement = getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(addButtonElement);

  const todoElement = getByText(/Test Todo/i);
  expect(todoElement).toBeInTheDocument();
});
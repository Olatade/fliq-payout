import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import 

// make sure every test is starting from thesame starting point
afterEach(() =>{
  cleanup();
})

test('should render payout form when App is rendered', () => {
  render(< />);
  const appElement = screen.getByTestId('payout-form');
  expect(appElement).toBeInTheDocument();
});




// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders Navigation component', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Review/i);
//   expect(linkElement).toBeInTheDocument();
// });

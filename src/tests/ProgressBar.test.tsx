import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import PayoutProgress from '../components/Payout-progress';
import renderer from 'react-test-renderer';

// make sure every test is starting from thesame starting point
afterEach(() =>{
  cleanup();
})

test('should render payout progress bar', () => {
  const stage = 1
  render(<PayoutProgress stage={stage} />);
  const appElement = screen.getByTestId('payout-progress');
  expect(appElement).toBeInTheDocument();
});

test('matches stage 1 snapshot', () => {
  const stage = 1
  const tree = renderer.create(<PayoutProgress stage={stage} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('matches stage 2 snapshot', () => {
  const stage = 2
  const tree = renderer.create(<PayoutProgress stage={stage} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('matches stage 3 snapshot', () => {
  const stage = 3
  const tree = renderer.create(<PayoutProgress stage={stage} />).toJSON();
  expect(tree).toMatchSnapshot();
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

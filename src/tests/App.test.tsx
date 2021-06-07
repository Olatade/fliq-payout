import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import FormPayoutAmount from '../components/form-payout-amount';
import FormPayoutReceipt from '../components/form-payout-receipt';
import PayoutReview from '../components/payout-review';

// make sure every test is starting from thesame starting point
afterEach(() =>{
  cleanup();
})

test('should render payout form when App is rendered', () => {
  render(<App />);
  const appElement = screen.getByTestId('payout-form');
  expect(appElement).toBeInTheDocument();
});

test('should render payout form when correct props are passed', () => {
  const values = {
    youSend: '',
    sendCurrency: 'JPY',
    receiveCurrency: 'JPY',
    transferFee: '0.00',
    convertAmount: '0.00',
    guaranteedRate: '0.00',
    recipientGets: '',
    recipientEmail: '',
    recipientFullname: '',
    iban: '',
    swift: '',
    stage: 1
  }
  const updateValue = {};
  render(<FormPayoutAmount values={values} setValues={updateValue}/>);
  const appElement = screen.getByTestId('payout-form');
  expect(appElement).toBeInTheDocument();
});

test('should render receipt form when correctprops are passed', () => {
  const values = {
    youSend: '',
    sendCurrency: 'JPY',
    receiveCurrency: 'JPY',
    transferFee: '0.00',
    convertAmount: '0.00',
    guaranteedRate: '0.00',
    recipientGets: '',
    recipientEmail: '',
    recipientFullname: '',
    iban: '',
    swift: '',
    stage: 2
  }
  const updateValue = {};
  render(<FormPayoutReceipt values={values} setValues={updateValue}/>);
  const appElement = screen.getByTestId('receipt-form');
  expect(appElement).toBeInTheDocument();
});

test('should render review card when correctprops are passed', () => {
  const values = {
    youSend: '',
    sendCurrency: 'JPY',
    receiveCurrency: 'JPY',
    transferFee: '0.00',
    convertAmount: '0.00',
    guaranteedRate: '0.00',
    recipientGets: '',
    recipientEmail: '',
    recipientFullname: '',
    iban: '',
    swift: '',
    stage: 3
  }
  const updateValue = {};
  render(<PayoutReview values={values} setValues={updateValue}/>);
  const appElement = screen.getByTestId('review-card');
  expect(appElement).toBeInTheDocument();
});

test('receipt component will display payout form when stage is not 2', () => {
  const values = {
    youSend: '',
    sendCurrency: 'JPY',
    receiveCurrency: 'JPY',
    transferFee: '0.00',
    convertAmount: '0.00',
    guaranteedRate: '0.00',
    recipientGets: '',
    recipientEmail: '',
    recipientFullname: '',
    iban: '',
    swift: '',
    stage: 1
  }
  const updateValue = {};
  render(<FormPayoutReceipt values={values} setValues={updateValue}/>);
  const appElement = screen.getByTestId('payout-form');
  expect(appElement).toBeInTheDocument();
});

test('review card will display payout form when stage is not 3', () => {
  const values = {
    youSend: '',
    sendCurrency: 'JPY',
    receiveCurrency: 'JPY',
    transferFee: '0.00',
    convertAmount: '0.00',
    guaranteedRate: '0.00',
    recipientGets: '',
    recipientEmail: '',
    recipientFullname: '',
    iban: '',
    swift: '',
    stage: 2
  }
  const updateValue = {};
  render(<PayoutReview values={values} setValues={updateValue}/>);
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

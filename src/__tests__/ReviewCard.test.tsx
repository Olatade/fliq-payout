import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import PayoutReview from '../components/ReviewCard';


// make sure every test is starting from thesame starting point
afterEach(() =>{
  cleanup();
})

test('should render review card when correct props are passed', () => {
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

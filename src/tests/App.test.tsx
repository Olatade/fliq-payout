import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import FormPayoutReceipt from '../components/ReceiptForm';
import PayoutReview from '../components/ReviewCard';

// make sure every test is starting from thesame starting point
afterEach(() =>{
  cleanup();
})

test('should render payout form when App is rendered', () => {
  render(<App />);
  const appElement = screen.getByTestId('payout-form');
  expect(appElement).toBeInTheDocument();
});


test('receipt component will render payout form when stage is not 2', () => {
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
  const payoutForm = screen.getByTestId('payout-form');
  expect(payoutForm).toBeInTheDocument();
});



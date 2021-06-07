import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import FormPayoutAmount from '../components/form-payout-amount';


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
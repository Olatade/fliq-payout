import React from 'react';
import logo from './assets/img/fliqpay-logo.png';
import './styles/App.css';
import FormPayoutAmount from './components/form-payout-amount';
import FormPayoutReceipt from './components/form-payout-receipt';
import PayoutReview from './components/payout-review';
import PayoutProgress from './components/Payout-progress';


function App() {
  return (
    <div className="App">

      <header className="nav">
        <img src={logo} className="nav__logo" alt="logo" />
        <PayoutProgress/>
      </header>

      <div className="body">
        <FormPayoutAmount/>
      </div>

    </div>
  );
}

export default App;

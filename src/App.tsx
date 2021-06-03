import React from 'react';
import logo from './assets/img/fliqpay-logo.png';
import './styles/App.css';
import FormPayoutAmount from './components/form-payout-amount';
import FormPayoutReceipt from './components/form-payout-receipt';

function App() {
  return (
    <div className="App">

      <header className="nav">
        <img src={logo} className="nav__logo" alt="logo" />
        <div className="progress-bar">This is the progress bar</div>
      </header>

      <div className="body">
        <FormPayoutReceipt/>
      </div>

    </div>
  );
}

export default App;

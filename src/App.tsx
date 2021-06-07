import './styles/App.css';
import Nav from './components/Nav';
import FormPayoutAmount from './components/form-payout-amount';
import FormPayoutReceipt from './components/form-payout-receipt';
import PayoutReview from './components/payout-review';

import { BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [values, updateValue] = useState({
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
  });

  return (
    <Router>
      <Nav values={values} setValues={updateValue}/>
      <Switch>
        <Route path="/" exact
          render={(props) =>(<FormPayoutAmount values={values} setValues={updateValue}/>)}
        ></Route>
        <Route path="/receipt" render={(props) =>(<FormPayoutReceipt values={values} setValues={updateValue}/>)}
        ></Route>
        <Route path="/review" 
          render={(props) =>(<PayoutReview values={values} setValues={updateValue}/>)}
        ></Route>
      </Switch>
    </Router>
  );
} 


// function App() {
//   return (
//     <div className="App">

//       <header className="nav">
//         <img src={logo} className="nav__logo" alt="logo" />
//         <PayoutProgress/>
//       </header>

//       <div className="body">
//         <FormPayoutAmount/>
//       </div>

//     </div>
//   );
// }

export default App;

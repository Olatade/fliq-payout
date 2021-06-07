import './styles/App.css';
import Nav from './components/Nav';
import FormPayoutAmount from './components/PayoutForm';
import FormPayoutReceipt from './components/ReceiptForm';
import PayoutReview from './components/ReviewCard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
    <Router data-testid="app">
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

export default App;

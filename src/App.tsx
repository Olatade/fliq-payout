import './styles/App.css';
import Nav from './components/Nav';
import FormPayoutAmount from './components/form-payout-amount';
import FormPayoutReceipt from './components/form-payout-receipt';
import PayoutReview from './components/payout-review';

import { BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [values, setValues] = useState({
    youSend: '0.00',
    transferFee: '0.00',
    collectAmount: '0.00',
    guaranteedRate: '0.00',
    recipientGets: '0.00',
    stage: 4
  });

  return (
    <Router>
      <Nav values={values} setValues={setValues}/>
      <Switch>
        <Route path="/" exact
          render={(props) =>(<FormPayoutAmount values={values} setValues={setValues}/>)}
        ></Route>
        <Route path="/receipt" component={FormPayoutReceipt}></Route>
        <Route path="/review" component={PayoutReview}></Route>
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

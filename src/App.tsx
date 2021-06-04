import './styles/App.css';
import Nav from './components/Nav';
import FormPayoutAmount from './components/form-payout-amount';
import FormPayoutReceipt from './components/form-payout-receipt';
import PayoutReview from './components/payout-review';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={FormPayoutAmount}></Route>
        <Route path="/receipt" exact component={FormPayoutReceipt}></Route>
        <Route path="/review" exact component={PayoutReview}></Route>
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

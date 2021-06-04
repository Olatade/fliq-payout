import logo from '../assets/img/fliqpay-logo.png';
import PayoutProgress from './Payout-progress';


function Nav() {
  return (
    <header className="nav">
      <img src={logo} className="nav__logo" alt="logo" />
        <PayoutProgress/>
    </header>
  );
}




export default Nav;

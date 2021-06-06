import logo from '../assets/img/fliqpay-logo.png';
import PayoutProgress from './Payout-progress';

interface prop{
  values: object;
  setValues: any;
}

const Nav = ( props: prop): any => {
  return (
    <header className="nav">
      <img src={logo} className="nav__logo" alt="logo" />
        <PayoutProgress stage={props.values['stage']}/>
    </header>
  );
}




export default Nav;

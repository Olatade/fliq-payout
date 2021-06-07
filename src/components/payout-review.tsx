import React from 'react';
import '../styles/App.css';
import FormPayoutAmount from '../components/form-payout-amount';

interface prop{
  values: object;
  setValues: any;
}

const PayoutReview = (props: prop): any => {
  const stateValues = props.values;
  console.log(stateValues);

  if(stateValues['stage'] == 3){
    return (
      <div className="card" data-testid="review-card">
        <div className="card-head">
          <p className="card-head__main">Review details of your transfer</p>
        </div>

        <div className="review-rows">
          <p className="review-row">
            <span className="review-row__description">You send</span>
            <span className="review-row__unit emphasize">{stateValues['youSend']} {stateValues['sendCurrency']}</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Total fees (included)</span>
            <span className="review-row__unit ">{stateValues['transferFee']} {stateValues['sendCurrency']}</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Amount we'll convert</span>
            <span className="review-row__unit ">{stateValues['convertAmount']} {stateValues['sendCurrency']}</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Guaranted rate</span>
            <span className="review-row__unit ">{stateValues['guaranteedRate']} </span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Johnny gets</span>
            <span className="review-row__unit emphasize">{stateValues['recipientGets']} {stateValues['receiveCurrency']}</span> 
          </p>
        </div>

        <div className="card-head">
        </div>

        <div className="review-rows">
          <p className="review-row">
            <span className="review-row__description">Name</span>
            <span className="review-row__unit">{stateValues['recipientFullname']}</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Email address</span>
            <span className="review-row__unit">{stateValues['recipientEmail']}</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">IBAN / Account number</span>
            <span className="review-row__unit">{stateValues['iban']}</span> 
          </p>
          {/* If swift code was inputed by user, display it in the review */}
          {stateValues['swift'] ? 
            <p className="review-row">
            <span className="review-row__description">IBAN / Account number</span>
            <span className="review-row__unit">{stateValues['iban']}</span> 
            </p> : ''
          }
        </div>

        <a className="btn-green mt-4" href="/">Confirm and continue</a>
        
      </div>
  );
  }else{
    return(
      <FormPayoutAmount values={stateValues} setValues={props.setValues}/>
    )
  }
}

 

 export default PayoutReview;
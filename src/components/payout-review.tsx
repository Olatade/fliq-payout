import '../styles/PayoutReview.css';
import React from 'react';
import '../styles/App.css';

function PayoutReview () {

  return (
      <div className="form">
        <div className="form-head">
          <p className="form-head__main">Review details of your transfer</p>
        </div>

        <div className="rows">
          <p className="row">
            <span className="row__description">You send</span>
            <span className="row__unit emphasize">1000 USD</span> 
          </p>
          <p className="row">
            <span className="row__description">Total fees (included)</span>
            <span className="row__unit ">1000 USD</span> 
          </p>
          <p className="row">
            <span className="row__description">Amount we'll convert</span>
            <span className="row__unit ">1000 USD</span> 
          </p>
          <p className="row">
            <span className="row__description">Guaranted rate</span>
            <span className="row__unit ">1000 USD</span> 
          </p>
          <p className="row">
            <span className="row__description">Johnny gets</span>
            <span className="row__unit emphasize">1,248.63 EUR</span> 
          </p>
        </div>

        <div className="form-head">
        </div>

        <div className="rows">
          <p className="row">
            <span className="row__description">Name</span>
            <span className="row__unit">Johnny Gbadamosi</span> 
          </p>
          <p className="row">
            <span className="row__description">Email address</span>
            <span className="row__unit">johnny.gbadamosi@gmail.com</span> 
          </p>
          <p className="row">
            <span className="row__description">IBAN / Account number</span>
            <span className="row__unit">DE898919013902102</span> 
          </p>
        </div>

        <a className="btn" href="/">Confirm and continue</a>
        
      </div>

  );
}

 

 export default PayoutReview;
import React from 'react';
import '../styles/App.css';

function PayoutReview () {

  return (
      <div className="card">
        <div className="card-head">
          <p className="card-head__main">Review details of your transfer</p>
        </div>

        <div className="review-rows">
          <p className="review-row">
            <span className="review-row__description">You send</span>
            <span className="review-row__unit emphasize">1000 USD</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Total fees (included)</span>
            <span className="review-row__unit ">1000 USD</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Amount we'll convert</span>
            <span className="review-row__unit ">1000 USD</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Guaranted rate</span>
            <span className="review-row__unit ">1000 USD</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Johnny gets</span>
            <span className="review-row__unit emphasize">1,248.63 EUR</span> 
          </p>
        </div>

        <div className="card-head">
        </div>

        <div className="review-rows">
          <p className="review-row">
            <span className="review-row__description">Name</span>
            <span className="review-row__unit">Johnny Gbadamosi</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">Email address</span>
            <span className="review-row__unit">johnny.gbadamosi@gmail.com</span> 
          </p>
          <p className="review-row">
            <span className="review-row__description">IBAN / Account number</span>
            <span className="review-row__unit">DE898919013902102</span> 
          </p>
        </div>

        <a className="btn-green mt-4" href="/">Confirm and continue</a>
        
      </div>

  );
}

 

 export default PayoutReview;
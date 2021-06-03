import React from 'react';
import '../styles/App.css';
import '../styles/PayoutProgress.css';
import 'alpinejs';



function PayoutProgress() {

  return (
    <div className="progress-bar">
      <div className="flex">

        <div className="left-pad"></div>

        <div className="step step-1">
          <div className="step__inner active"></div>
        </div>


        <div className="progress">
          <div className="progress__inner">
            <div className="progress__length" style={{ width: '100%' }}></div>
          </div>
        </div>


        <div className="step step-2">
          <div className="step__inner active"></div>
        </div>

        <div className="progress">
          <div className="progress__inner">
            <div className="progress__length" style={{ width: '20%' }}></div>
          </div>
        </div>

        <div className="step step-3">
          <div className=" step__inner"></div>
        </div>


        <div className="progress">
          <div className="progress__inner">
            <div className="progress__length" style={{ width: '0%' }}></div>
          </div>
        </div>


        <div className="step step-4">
          <div className="step__inner"></div>
        </div>


        <div className="right-pad"></div>
      </div>

      <div className="step-names">
        <div>Amount</div>

        <div>Receipt</div>

        <div>Review</div>

        <div>Pay</div>
      </div>

    </div>
  );
}



export default PayoutProgress;
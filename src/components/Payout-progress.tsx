import React from 'react';
import '../styles/App.css';
import '../styles/PayoutProgress.css';
import 'alpinejs';

interface prop{
  stage: number;
}


const PayoutProgress = ( props: prop): any => {

  return (
    <div data-testid="payout-progress" className="progress-bar">
      <div className="flex">

        <div className="left-pad"></div>

        <div className="step step-1">
          {props.stage >= 1 ? <div className="step__inner active"></div> : <div className="step__inner"></div> }
          {/* <div className="step__inner active"></div> */}
        </div>


        <div className="progress">
          <div className='progress__inner'>
            {props.stage > 1 ? <div className="progress__length" style={{ width: '100%' }}></div> : <div className="progress__length" style={{ width: '0' }}></div> }
            {/* <div className="progress__length" style={{ width: '100%' }}></div> */}
          </div>
        </div>


        <div className="step step-2">
        {props.stage >= 2 ? <div className="step__inner active"></div> : <div className="step__inner"></div> }
          {/* <div className="step__inner active"></div> */}
        </div>

        <div className="progress">
          <div className="progress__inner">
          {props.stage > 2 ? <div className="progress__length" style={{ width: '100%' }}></div> : <div className="progress__length" style={{ width: '0' }}></div> }
            {/* <div className="progress__length" style={{ width: '20%' }}></div> */}
          </div>
        </div>

        <div className="step step-3">
        {props.stage >= 3 ? <div className="step__inner active"></div> : <div className="step__inner"></div> }
          {/* <div className=" step__inner"></div> */}
        </div>


        <div className="progress">
          <div className="progress__inner">
          {props.stage == 4 ? <div className="progress__length" style={{ width: '100%' }}></div> : <div className="progress__length" style={{ width: '0' }}></div> }
            {/* <div className="progress__length" style={{ width: '0%' }}></div> */}
          </div>
        </div>


        <div className="step step-4">          
          {props.stage >= 4 ? <div className="step__inner active"></div> : <div className="step__inner"></div> }
          {/* <div className="step__inner"></div> */}
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
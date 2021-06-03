import React from 'react';
import '../styles/App.css';
import '../styles/PayoutProgress.css';
import 'alpinejs';



function PayoutProgress() {

  return (
    <div className="hidden md:block w-full mx-auto border border-red-700">
      <div className="flex">
        <div className="flex-1"></div>

        <div className="flex-1">
          <div className="w-2 h-2 bg-color-primary mx-auto rounded-full text-lg text-gray-500 flex items-center">
            <span className="text-gray-500 text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
          </div>
        </div>


        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="bg-color-primary text-xs leading-none py-1 text-center text-grey-darkest rounded w-full" style={{ width: '100%' }}></div>
          </div>
        </div>


        <div className="flex-1">
          <div className="w-2 h-2 bg-color-primary mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="bg-color-primary text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{ width: '20%' }}></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-2 h-2 bg-gray-300  mx-auto rounded-full text-lg text-white flex items-center"></div>
        </div>


        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div className="bg-color-primary text-xs leading-none py-1 text-center text-grey-darkest rounded" style={{ width: '0%' }}></div>
          </div>
        </div>


        <div className="flex-1">
          <div className="w-2 h-2 bg-gray-300  mx-auto rounded-full text-lg text-white flex items-center"></div>
        </div>


        <div className="flex-1"></div>
      </div>

      <div className="flex text-xs content-center text-center">
        <div className="w-1/4">Amount</div>

        <div className="w-1/4">Receipt</div>

        <div className="w-1/4">Review</div>

        <div className="w-1/4">Pay</div>
      </div>

    </div>
  );
}



export default PayoutProgress;
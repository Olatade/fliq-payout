import '../styles/FormPayoutReceipt.css';
import React from 'react';
import '../styles/App.css';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from "yup";
import 'alpinejs';
import {useState} from 'react'; 



function FormPayoutReceipt () {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    console.log(index);
    setToggleState(index);
  };

  return (
    <Formik
      initialValues={{ youSend: "", recipientGets: ""}}
      validationSchema={Yup.object({
        youSend: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(`Required`),
        recipientGets: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <div className="form-head">
          <p className="form-head__main">Your Receipt</p>
          <p className="form-head__sub">Who are you sending money to?</p>
        </div>

        {/* You send */}
        <div>
          <div className="pay-input">
            <label className="pay-input__label"  htmlFor="youSend">You send</label>
            <Field className="pay-input__price" name="youSend" type="text" placeholder="0.00" />
          </div>
          <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="youSend" />
        </div>

        {/* Recepient gets */}
        <div>
          <div className="pay-input">
            <label className="pay-input__label"  htmlFor="recipientGets">Recipient gets </label>
            <Field className="pay-input__price" name="recipientGets" type="text" placeholder="0.00" />
          </div>
          <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="recipientGets" />
        </div>

        <div className="form-subheading ">
          <p className="form-subheading__main">Bank details</p>
        </div>

        
        <div className="tab-container">
          <div className="tab-container__buttons">
            <button className={toggleState === 1 ? "tab-button active-tab-button" : "tab-button"} onClick={() => toggleTab(1)}>
              Inside Europe
            </button>

            <button className={toggleState === 2 ? "tab-button active-tab-button" : "tab-button"} onClick={() => toggleTab(2)}>
              Outside Europe
            </button>

          </div>

          <div className="tab-container__content">
            <div className={toggleState === 1 ? "tab-content  active-tab-content" : "tab-content"}>

              {/* IBAN */}
              <div>
                <div className="pay-input">
                  <label className="pay-input__label" htmlFor="youSend">IBAN</label>
                  <Field className="pay-input__price" name="youSend" type="text" placeholder="0.00" />
                </div>
                <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="youSend" />
              </div>
            </div>

          <div className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}>

              {/* You send */}
              <div>
                <div className="pay-input">
                  <label className="pay-input__label" htmlFor="youSend">SWIFT / BIC code</label>
                  <Field className="pay-input__price" name="youSend" type="text" placeholder="BUKBGB22" />
                </div>
                <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="youSend" />
              </div>

              {/* Recepient gets */}
              <div>
                <div className="pay-input">
                  <label className="pay-input__label"  htmlFor="recipientGets">IBAN / Account Number</label>
                  <Field className="pay-input__price" name="recipientGets" type="text" placeholder="01234567891" />
                </div>
                <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="recipientGets" />
              </div>
            
          </div>
      </div>
        </div>
  


        <div className="pay-input__buttons">
          <a className="pay-input__buttons--compare" href="/">Compare Rates</a>
          <button className="pay-input__buttons--continue" type="submit">Continue</button>
        </div>
        
      </Form>
    </Formik>
  );
}

 

 export default FormPayoutReceipt;
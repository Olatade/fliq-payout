import '../styles/FormPayoutReceipt.css';
import React from 'react';
import '../styles/App.css';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from "yup";

 

function FormPayoutReceipt () {
  var stringToHTML = function (str: string) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
  const required = stringToHTML(`<p className=".pay-input__error-message">Required</p>`)

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

        <div>

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
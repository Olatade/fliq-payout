import '../styles/FormPayoutAmount.css';
import React from 'react';
import '../styles/App.css';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from "yup";

 

function FormPayoutAmount() {
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
          <p className="form-head__main">One-time Payout</p>
          <p className="form-head__sub">Send money internationally</p>
        </div>

        {/* You send */}
        <div>
          <div className="pay-input">
            <label className="pay-input__label"  htmlFor="youSend">You send</label>
            <Field className="pay-input__price" name="youSend" type="text" placeholder="0.00" />
            <div className="pay-input__currency">
              <label className="sr-only" htmlFor="sendCurrency">Currency</label>
              <Field className="pay-input__currency--select" name="sendCurrency" as="select">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>
          </div>
          <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="youSend" />
        </div>

        <div className="Fee">
          <p className="fee__line"></p>
          <p className="fee__item"><span className="fee__unit">3.69 USD</span> <span className="fee__description">Transfer fee</span></p>
          <p></p>
          <p className="fee__item"><span className="fee__unit">996.31 EUR</span> <span className="fee__description">Amount we'll convert</span></p>
          <p></p>
          <p className="fee__item"><span className="fee__unit">1.14989</span> <span className="fee__description">Guaranteed rate (1hr)</span></p>
          <p></p>
        </div>

        {/* Recepient gets */}
        <div>
          <div className="pay-input">
            <label className="pay-input__label"  htmlFor="recipientGets">Recipient gets </label>
            <Field className="pay-input__price" name="recipientGets" type="text" placeholder="0.00" />
            <div className="pay-input__currency">
              <label className="sr-only" htmlFor="receiveCurrency">Currency</label>
              <Field className="pay-input__currency--select" name="receiveCurrency" as="select">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>
          </div>
          <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="recipientGets" />
        </div>

        <div className="pay-input__buttons">
          <a className="pay-input__buttons--compare" href="/">Compare Rates</a>
          <button className="pay-input__buttons--continue" type="submit">Continue</button>
        </div>
        
      </Form>
    </Formik>
  );
}

 

 export default FormPayoutAmount;
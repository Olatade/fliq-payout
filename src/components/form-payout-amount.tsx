import React from 'react';
// import '../styles/FormPayoutAmount.css';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import { Link } from 'react-router-dom';
 import * as Yup from "yup";
 import { CircleFlag } from 'react-circle-flags';
 import currencies from '../data/currencies';
 

function FormPayoutAmount() {
  var stringToHTML = function (str: string) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
  const required = stringToHTML(`<p className=".form-group__error-message">Required</p>`)

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
      <Form className="card">
        <div className="card-head">
          <p className="card-head__main">One-time Payout</p>
          <p className="card-head__sub">Send money internationally</p>
        </div>

        {/* You send */}
        <div>
          <div className="form-group inner-label">
            <label className="form-group__label"  htmlFor="youSend">You send</label>
            <Field className="form-group__input" name="youSend" type="text" placeholder="0.00" />
            <div className="select-group">
              <label className="sr-only" htmlFor="sendCurrency">Currency</label>
              <Field className="form-group__select" name="sendCurrency" as="select">
                {currencies.map((currency) => (
                  <option value={currency} key={currency}>{currency}</option>
                ))}
              </Field>
            </div>
          </div>
          <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="youSend" />
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
          <div className="form-group inner-label">
            <label className="form-group__label"  htmlFor="recipientGets">Recipient gets </label>
            <Field className="form-group__input" name="recipientGets" type="text" placeholder="0.00" />
            <div className="select-group">
              <label className="sr-only" htmlFor="receiveCurrency">Currency</label>
              <Field className="form-group__select" name="receiveCurrency" as="select">
                {currencies.map((currency) => (
                  <option value={currency} key={currency} >{currency}</option>
                ))}
              </Field>
            </div>
          </div>
          <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="recipientGets" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4;">
          <a className="btn-hollow " href="/">Compare Rates</a>
          <button className="btn-full " type="submit">Continue</button>
        </div>
        
      </Form>
    </Formik>
  );
}

 

 export default FormPayoutAmount;
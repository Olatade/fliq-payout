import '../styles/FormPayoutReceipt.css';
import React from 'react';
import '../styles/App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import 'alpinejs';
import { useState } from 'react';



function FormPayoutReceipt() {

  // set hook to toggle tab state when tab is clicked
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    // set the toggleState to the index of the selected tab
    setToggleState(index);
  };

  return (
    <Formik
      initialValues={{ email: "", fullName: "", iban: "", swift: "" }}
      
      // validation configuration using Yup
      validationSchema={Yup.object({
        email: Yup.string()
          .max(15, "Must be 15 characters or less"),

        fullName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        iban: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        swift: Yup.string()
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

        {/* Email */}
        <div>
          <div className="pay-input">
            <label className="pay-input__label" htmlFor="email">Their email (optional)</label>
            <Field className="pay-input__price" name="email" type="text" placeholder="" />
          </div>
          <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="email" />
        </div>

        {/* Full name */}
        <div>
          <div className="pay-input">
            <label className="pay-input__label" htmlFor="fullName">Full name of the account holder</label>
            <Field className="pay-input__price" name="fullName" type="text" placeholder="" />
          </div>
          <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="fullName" />
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
                  <label className="pay-input__label" htmlFor="iban">IBAN</label>
                  <Field className="pay-input__price" name="iban" type="text" placeholder="0.00" />
                </div>
                <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="iban" />
              </div>
            </div>

            <div className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}>

              {/* SWIFT */}
              <div>
                <div className="pay-input">
                  <label className="pay-input__label" htmlFor="swift">SWIFT / BIC code</label>
                  <Field className="pay-input__price" name="swift" type="text" placeholder="BUKBGB22" />
                </div>
                <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="swift" />
              </div>

              {/* IBAN EUROPE */}
              <div>
                <div className="pay-input">
                  <label className="pay-input__label" htmlFor="iban">IBAN</label>
                  <Field className="pay-input__price" name="iban" type="text" placeholder="0.00" />
                </div>
                <ErrorMessage render={msg => <div className="pay-input__error-message">{msg}</div>} name="iban" />
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
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
      <Form className="card">
        <div className="card-head">
          <p className="card-head__main">Your Receipt</p>
          <p className="card-head__sub">Who are you sending money to?</p>
        </div>

        {/* Email */}
        <div>
          <div className="form-group">
            <label className="form-group__label" htmlFor="email">Their email (optional)</label>
            <Field className="form-group__input" name="email" type="text" placeholder="" />
          </div>
          <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="email" />
        </div>

        {/* Full name */}
        <div>
          <div className="form-group">
            <label className="form-group__label" htmlFor="fullName">Full name of the account holder</label>
            <Field className="form-group__input" name="fullName" type="text" placeholder="" />
          </div>
          <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="fullName" />
        </div>

        <div className="card-subheading ">
          <p className="card-subheading__main">Bank details</p>
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
                <div className="form-group">
                  <label className="form-group__label" htmlFor="iban">IBAN</label>
                  <Field className="form-group__input" name="iban" type="text" placeholder="0.00" />
                </div>
                <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="iban" />
              </div>
            </div>

            <div className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}>

              {/* SWIFT */}
              <div>
                <div className="form-group">
                  <label className="form-group__label" htmlFor="swift">SWIFT / BIC code</label>
                  <Field className="form-group__input" name="swift" type="text" placeholder="BUKBGB22" />
                </div>
                <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="swift" />
              </div>

              {/* IBAN EUROPE */}
              <div>
                <div className="form-group">
                  <label className="form-group__label" htmlFor="iban">IBAN</label>
                  <Field className="form-group__input" name="iban" type="text" placeholder="0.00" />
                </div>
                <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="iban" />
              </div>

            </div>
          </div>
        </div>



        <div className="grid mt-4">
          <button className="btn-full" type="submit">Continue</button>
        </div>

      </Form>
    </Formik>
  );
}



export default FormPayoutReceipt;
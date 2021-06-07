import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { useState } from 'react';
import FormPayoutAmount from './PayoutForm';


interface prop{
  values: object;
  setValues: any;
}
// do not mount if the stage has not been set to the receipt stage (stage 2)


const  FormPayoutReceipt = (props: prop): any => {
    const stateValues = props.values;
    const history = useHistory();

  // set hook to toggle tab state when tab is clicked
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    // e.preventDefault();
    // set the toggleState to the index of the selected tab
    setToggleState(index);
  };
  if(stateValues['stage'] == 2 ){
    return (
      <div data-testid="receipt-form">
              <Formik
        initialValues={{ 
          email: stateValues['recipientEmail'], 
          fullName: stateValues['recipientFullname'], 
          iban: stateValues['iban'], 
          swift: stateValues['swift'],
         }}
        
        // validation configuration using Yup
        validationSchema={Yup.object({
          email: Yup.string().email(),
          fullName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          iban: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          swift: Yup.string()
            .max(15, "Must be 15 characters or less")
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          //update the state values
          props.setValues({
            ...stateValues,
            recipientEmail: values['email'],
            recipientFullname: values['fullName'],
            iban: values['iban'],
            swift: values['swift'],
            stage: 3
          })
          // go the the review page
          history.push("/review");
  
  
  
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
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
              <a className={toggleState === 1 ? "tab-button active-tab-button" : "tab-button"} onClick={(e) => toggleTab(1)}>
                Inside Europe
              </a>
  
              <a className={toggleState === 2 ? "tab-button active-tab-button" : "tab-button"} onClick={(e) => toggleTab(2)}>
                Outside Europe
              </a>
  
            </div>
  
            <div className="tab-container__content">
              <div className={toggleState === 1 ? "tab-content  active-tab-content" : "tab-content"}>
  
                {/* IBAN */}
                <div>
                  <div className="form-group">
                    <label className="form-group__label" htmlFor="iban">IBAN</label>
                    <Field className="form-group__input" name="iban" type="text" placeholder="" />
                  </div>
                  <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="iban" />
                </div>
              </div>
  
              <div className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}>
  
                {/* SWIFT */}
                <div>
                  <div className="form-group">
                    <label className="form-group__label" htmlFor="swift">SWIFT / BIC code</label>
                    <Field className="form-group__input" name="swift" type="text" placeholder="" />
                  </div>
                  <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="swift" />
                </div>
  
                {/* IBAN EUROPE */}
                <div>
                  <div className="form-group">
                    <label className="form-group__label" htmlFor="iban">IBAN</label>
                    <Field className="form-group__input" name="iban" type="text" placeholder="" />
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
      </div>
    );
  }else{
    return(
      <FormPayoutAmount values={stateValues} setValues={props.setValues}/>
    )
  }
}



export default FormPayoutReceipt;
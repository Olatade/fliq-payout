 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import React, { FC } from 'react';
 import { Link } from 'react-router-dom';
 import * as Yup from "yup";
 import { CircleFlag } from 'react-circle-flags';
 import currencies from '../data/currencies';
 

 interface prop{
   values: object;
   setValues: any;
 }

const FormPayoutAmount = ( props: prop): any => {
    console.log(props);
    const values = props.values;
  // const [values, setValues] = useState(defaults);

  React.useEffect( () =>{
    console.log(values['youSend']);
  },[values['youSend']]);

  return (
    <Formik
      initialValues={{ youSend: values['youSend'], recipientGets: values['recipientGets']}}
      validationSchema={Yup.object({
        youSend: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(`Required`),
        recipientGets: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      })}
      onSubmit={(fields, { setSubmitting }) => {
        
        setTimeout(() => {
          console.log(props);
          // alert(JSON.stringify(values, null, 2));

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
            <Field className="form-group__input" name="youSend" type="text" placeholder={values['youSend']} />
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
          <p className="fee__item"><span className="fee__unit">{values['transferFee']}{}</span> <span className="fee__description">Transfer fee</span></p>
          <p></p>
          <p className="fee__item"><span className="fee__unit">{values['collectAmount']}</span> <span className="fee__description">Amount we'll convert</span></p>
          <p></p>
          <p className="fee__item"><span className="fee__unit">{values['guaranteedRate']}</span> <span className="fee__description">Guaranteed rate (1hr)</span></p>
          <p></p>
        </div>

        {/* Recepient gets */}
        <div>
          <div className="form-group inner-label">
            <label className="form-group__label"  htmlFor="recipientGets">Recipient gets </label>
            <Field className="form-group__input" name="recipientGets" type="text" placeholder={values['recipientGets']} />
            <div className="select-group">
              <label className="sr-only" htmlFor="receiveCurrency">Currency</label>
              <Field className="form-group__select" name="receiveCurrency" as="select" >
                {/* {currencies.map((currency) => (
                  <option value={currency} key={currency} >{currency}</option>
                ))} */}
              </Field>
            </div>
          </div>
          <ErrorMessage render={msg => <div className="form-group__error-message">{msg}</div>} name="recipientGets" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <a className="btn-hollow " href="/">Compare Rates</a>
          {/* <Link to="/receipt"></Link> */}
          <button className="btn-full" type="submit">Continue</button>
        </div>
        
      </Form>
    </Formik>
  );
}

 

 export default FormPayoutAmount;
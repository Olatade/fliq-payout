 import {useFormikContext, useField, Formik, Form, Field, ErrorMessage } from 'formik';
 import React, { FC, useEffect } from 'react';
 import { useHistory } from "react-router-dom";
 import { Link } from 'react-router-dom';
 import * as Yup from "yup";
 import { CircleFlag } from 'react-circle-flags';
 import currencies from '../data/currencies';
 import addCommasToAmount from '../utils/addCommasToAmount';
 import keys from '../data/keys';


 async function fetchRate(baseCurrency, toCurrency, amount ) {
  // const res = await fetch(`http://data.fixer.io/api/convert?access_key=${keys.fixer}&from=${baseCurrency}&to=${toCurrency}&amount=${amount}`);
  // const result = await res.json();
  // return result;
  const response = '{"success":true,"query":{"from":"USD","to":"JPY","amount":1000},"info":{"timestamp":1623020343,"rate":109.587503},"date":"2021-06-06","result":109666.503}';
  return(JSON.parse(response));
}

const MyField = (props: any) => {

 // extract the values we need to send to fixer.io from the form
  const {
    values: { youSend, sendCurrency, receiveCurrency },
    setFieldValue,
  }: {values: any, setFieldValue: any}  = useFormikContext();

  const [field, meta] = useField(props);

  // Do this when any of the values change
  React.useEffect(() => {
    let isCurrent = true;

    // if send send amount and send currency is not empty request convertion from API
    if (youSend.trim() !== '' && sendCurrency.trim() !== '' && youSend > 0) {
      
      // Take away fliqpay percentage from amount customer is sending
      // considering fliqpay charges 2% of the money being sent
      const transferFee = ((2/100) * youSend);
      const amount = youSend - transferFee;
      console.log(amount)
      fetchRate(sendCurrency, receiveCurrency, amount).then((result) => {
        console.log(result);
  
        if(result){
          if (!!isCurrent) {
            // prevent setting old values
            setFieldValue(props.name, addCommasToAmount(result.result));
            props.updateValues({
              ...props.stateValues,
              youSend: youSend,
              sendCurrency: sendCurrency,
              transferFee: `${addCommasToAmount(transferFee)} ${sendCurrency}`,
              convertAmount: `${addCommasToAmount(amount)} ${receiveCurrency}`,
              guaranteedRate: (result.result/amount).toFixed(2),
              recipientGets: result.result
            });
          }
        }
      });
    }
    return () => {
      isCurrent = false;
    };
  }, [sendCurrency, receiveCurrency, youSend, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {/* {!!meta.touched && !!meta.error && <div>{meta.error}</div>} */}
    </>
  );
};


 interface prop{
   values: object;
   setValues: any;
 }

const FormPayoutAmount = ( props: prop): any => {
    const stateValues = props.values;
    const history = useHistory();

  return (
    <Formik
      initialValues={{ 
        youSend: stateValues['youSend'],
        recipientGets: stateValues['recipientGets'],
        sendCurrency: stateValues['sendCurrency'],
        receiveCurrency: stateValues['receiveCurrency']
      }}
      validationSchema={Yup.object({
        youSend: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(`Required`),
        recipientGets: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      })}
      onSubmit={(fields, { setSubmitting }) => {
        
        history.push("/receipt");
        // when the send field is changed
            // go and check for rates with the api
            // based on the rates gotte, fill the recipient gets field
            // fill the other stuff
        // update state based on form inputs
        // props.setValues({
        //   ...stateValues,
        //   youSend: fields['youSend'],
        //   sendCurrency: fields['sendCurrency'],
        //   receiveCurrency: fields['receiveCurrency'],
        //   transferFee: '',
        //   collectAmount: '',
        //   guaranteedRate: '',
        //   recipientGets: '',
        //   stage: 4          
        // })

         props.setValues({
          ...stateValues,
          stage: 2          
        })
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
            <Field  className="form-group__input" name="youSend" type="text" placeholder={stateValues['youSend']} />
            <div className="select-group">
              <label className="sr-only" htmlFor="sendCurrency">Currency</label>
              <Field className="form-group__select" name="sendCurrency" as="select" placeholder={stateValues['sendCurrency']}>
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
          <p className="fee__item"><span className="fee__unit">{stateValues['transferFee']}{}</span> <span className="fee__description">Transfer fee</span></p>
          <p></p>
          <p className="fee__item"><span className="fee__unit">{stateValues['convertAmount']}</span> <span className="fee__description">Amount we'll convert</span></p>
          <p></p>
          <p className="fee__item "><span className="fee__unit emphasize">{stateValues['guaranteedRate']}</span> <span className="fee__description emphasize">Guaranteed rate (1hr)</span></p>
          <p></p>
        </div>

        {/* Recepient gets */}
        <div>
          <div className="form-group inner-label">
            <label className="form-group__label"  htmlFor="recipientGets">Recipient gets </label>
            {/* pass in update values and state values as a prop, so APP state can be updated */}
            <MyField className="form-group__input" name="recipientGets" type="text" updateValues={props.setValues} stateValues={stateValues} disabled placeholder={stateValues['recipientGets']} />
            <div className="select-group">
              <label className="sr-only" htmlFor="receiveCurrency">Currency</label>
              <Field className="form-group__select" name="receiveCurrency" as="select" placeholder={stateValues['receiveCurrency']} >
                {currencies.map((currency) => (
                  <option value={currency} key={`${currency}${currency}`}>{currency}</option>
                ))}
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
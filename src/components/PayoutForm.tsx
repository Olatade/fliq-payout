import { useFormikContext, useField, Formik, Form, Field, ErrorMessage } from 'formik';
import React, { FC, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { CircleFlag } from 'react-circle-flags';
import currencies from '../data/currencies';
import addCommasToAmount from '../utils/addCommasToAmount';
import keys from '../data/keys';


async function fetchRate(baseCurrency, toCurrency, amount) {
  // const res = await fetch(`https://data.fixer.io/api/convert?access_key=${keys.fixer}&from=${baseCurrency}&to=${toCurrency}&amount=${amount}`);
  // const result = await res.json();
  // return result;

  // simulate fixer API success response
  const response = '{"success":true,"query":{"from":"USD","to":"JPY","amount":1000},"info":{"timestamp":1623020343,"rate":109.587503},"date":"2021-06-06","result":109666.503}';
  return (JSON.parse(response));
}

const MyField = (props: any) => {

  // extract the values we need to send to fixer.io from the form
  const {
    values: { youSend, sendCurrency, receiveCurrency },
    setFieldValue,
  }: { values: any, setFieldValue: any } = useFormikContext();

  const [field, meta] = useField(props);

  // Do this when form inputs change
  React.useEffect(() => {
    let isCurrent = true;
    // if the value in the send field is not empty and it is a number
    if (youSend.trim() !== '' && parseInt(youSend.trim())  && youSend >= 0) {
      console.log('pass');
      // Take away fliqpay percentage from amount customer is sending
      // considering fliqpay charges 0.5% of the money being sent
      const transferFee = ((0.5 / 100) * youSend);
      const amount = youSend - transferFee;
      console.log(typeof(amount));
      fetchRate(sendCurrency, receiveCurrency, amount).then((result) => {
        console.log(result);
        if (result && result['success'] === true) {
          if (!!isCurrent) {
            // prevent setting old values
            setFieldValue(props.name, addCommasToAmount(result.result));
            props.updateValues({
              ...props.stateValues,
              youSend: youSend,
              sendCurrency: sendCurrency,
              transferFee: addCommasToAmount(transferFee),
              convertAmount: addCommasToAmount(amount),
              guaranteedRate: addCommasToAmount((result.result / amount).toFixed(2)),
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
    </>
  );
};


interface prop {
  values: object;
  setValues: any;
}

const FormPayoutAmount = (props: prop): any => {
  const stateValues = props.values;
  const history = useHistory();

  return (
    <div data-testid="payout-form">
      <Formik
        initialValues={{
          youSend: stateValues['youSend'],
          recipientGets: stateValues['recipientGets'],
          sendCurrency: stateValues['sendCurrency'],
          receiveCurrency: stateValues['receiveCurrency']
        }}
        validationSchema={Yup.object({
          youSend: Yup.string().trim().min(2, 'must be more than two characters').required(`Required`),
          recipientGets: Yup.string()
            .required("Required"),
        })}
        onSubmit={(fields, { setSubmitting }) => {
          
          // update the stage
          props.setValues({
            ...stateValues,
            stage: 2
          })

          // render the receipt form
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

        }}

      >
        <Form className="card">
          <div className="card-head no-underline">
            <p className="card-head__main">One-time Payout</p>
            <p className="card-head__sub">Send money internationally</p>
          </div>

          {/* You send */}
          <div>
            <div className="form-group inner-label">
              <label className="form-group__label" htmlFor="youSend">You send</label>
              <Field className="form-group__input" name="youSend" type="text" placeholder={stateValues['youSend']} />
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

          <div className="fee">
            <p className="fee__line"></p>
            <p className="fee__item">
              <div className="fee__symbol">
                <span className=" fee__symbol-text text-center w-full">-</span>
              </div>
              <span className="fee__unit">{stateValues['transferFee']} {stateValues['sendCurrency']}</span> 
              <span className="fee__description">Transfer fee</span></p>
            <p className="fee__line"></p>
            <p className="fee__item">
              <div className="fee__symbol">
                <span className="fee__symbol-text text-center w-full">=</span>
              </div>
              <span className="fee__unit">{stateValues['convertAmount']} {stateValues['sendCurrency']}</span> <span className="fee__description">Amount we'll convert</span>
            </p>
            <p className="fee__line"></p>
            <p className="fee__item ">
              <div className="fee__symbol">
                <span className=" fee__symbol-text text-center w-full">x</span>
              </div>
              <span className="fee__unit emphasize">{stateValues['guaranteedRate']}</span> <span className="fee__description emphasize">Guaranteed rate (1hr)</span>
            </p>
            <p className="fee__line"></p>
          </div>

          {/* Recepient gets */}
          <div>
            <div className="form-group inner-label">
              <label className="form-group__label" htmlFor="recipientGets">Recipient gets </label>
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

    </div>
  );
}



export default FormPayoutAmount;
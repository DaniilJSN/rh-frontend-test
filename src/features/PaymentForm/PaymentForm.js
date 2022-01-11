import React from 'react';
import Heading from '../../components/Heading/Heading';
import FormControl from '../../components/FormControl/FormControl';
import RadioButton from '../../components/RadioButton/RadioButton';
import CardPaymentOption from '../CardPaymentOption/CardPaymentOption';
import { useRecoilState } from 'recoil';
import { formState } from '../../store/paymentMethodStore';
import PaypalLogo from '../../assets/images/Paypal.png';
import './PaymentForm.scss';

const PaymentForm = () => {
  const [formValues, setFormValues] = useRecoilState(formState);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="payment-form">
      <Heading tag="h2" showAs="heading-6">
        Your info
      </Heading>
      <FormControl
        name="name"
        label="Name"
        placeholder="Enter your name"
        value={formValues.name}
        onChange={handleFormChange}
      />
      <FormControl
        name="lastname"
        label="Last name"
        placeholder="Enter your last name"
        value={formValues.lastname}
        onChange={handleFormChange}
      />
      <FormControl
        name="email"
        label="Email"
        placeholder="Enter your email"
        value={formValues.email}
        onChange={handleFormChange}
      />

      <Heading tag="h2" showAs="heading-6">
        Select payment
      </Heading>
      <RadioButton
        name="paymentMethod"
        value="CreditCard"
        onChange={handleFormChange}
      >
        <CardPaymentOption formValues={formValues} handleFormChage={handleFormChange} />
      </RadioButton>
      <RadioButton
        className="paypal-payment-control"
        name="paymentMethod"
        value="paypal"
        onChange={handleFormChange}
      >
        <div className="paypal-payment">
          <img
            src={PaypalLogo}
            alt="PayPal"
            width="127"
            height="40"
            loading="lazy"
          />
          <div>You’ill be redirected to paypal.com</div>
        </div>
      </RadioButton>
      <p className="notes">
        By pledging, you agree with Lynq <a href="/#">Terms of Use</a>,{' '}
        <a href="/#">Privacy Policy</a> and <a href="/#">Cookie Policy</a>
      </p>
    </div>
  );
};

export default PaymentForm;

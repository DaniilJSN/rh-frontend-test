import React from 'react';
import InputMask from "react-input-mask";
import "./CardPaymentOption.scss";

const CardPaymentOption = ({ formValues, handleFormChage }) => {
  return (
    <div className="card-payment-option">
      <div className="credit-card-icon"></div>
      <InputMask
        mask="9999-9999-9999-9999"
        type="text"
        name="cardNumber"
        placeholder="Card number"
        className="card-number"
        value={formValues.cardNumber}
        onChange={handleFormChage}
      />
      <InputMask
        mask="99/99"
        type="text"
        name="expired"
        placeholder="MM/YY"
        className="card-expired"
        value={formValues.expired}
        onChange={handleFormChage}
      />
      <InputMask
        mask="999"
        type="text"
        placeholder="CVC"
        className="card-cvc"
        name="cvc"
        value={formValues.cvc}
        onChange={handleFormChage}
      />
    </div>
  );
};

export default CardPaymentOption;

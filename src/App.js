import React, { useEffect, useState } from 'react';
import VideoCallLayout from './layout/VideoCallLayout';
import PaymentForm from './features/PaymentForm/PaymentForm';
import { Button } from 'react-materialize';
import { useRecoilState } from 'recoil';
import { formState } from './store/paymentMethodStore';

function App() {
  const [formValues] = useRecoilState(formState);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const USER_FIELDS = ['name', 'lastname', 'email'];
    let valid = true;

    USER_FIELDS.forEach((field) => {
      if (!formValues[field]) {
        valid = false;
        return;
      }
    });

    if (!formValues.paymentMethod) valid = false;

    setFormIsValid(valid);
  }, [formValues]);

  return (
    <div className="App">
      <VideoCallLayout
        footerChildren={<Button disabled={!formIsValid}>Pay $75</Button>}
      >
        <PaymentForm />
      </VideoCallLayout>
    </div>
  );
}

export default App;

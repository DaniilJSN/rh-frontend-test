import React from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import './FormControl.scss';

const FormControl = ({
  id = uuid(),
  className = null,
  label = null,
  type = 'text',
  ...props
}) => {
  return (
    <div className={classNames('form-control', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <textarea id={id} {...props}></textarea>
      ) : (
        <input id={id} type={type} {...props} />
      )}
    </div>
  );
};

export default FormControl;

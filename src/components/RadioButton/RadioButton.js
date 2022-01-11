import React from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import './RadioButton.scss';

const RadioButton = ({
  id = uuid(),
  className = null,
  label = null,
  type = 'radio',
  children,
  ...props
}) => {
  return (
    <div className={classNames('radio-btn', className)}>
      <input className="radio-btn-real" id={id} type={type} {...props} />
      <label className="radio-btn-wrapper" htmlFor={id}>
        <div className="radio-btn-fake"></div>
        <div className="radio-btn-content">{children}</div>
      </label>
    </div>
  );
};

export default RadioButton;

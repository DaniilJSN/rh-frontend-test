import classNames from 'classnames';
import React from 'react';
import "./Footer.scss";

const Footer = ({ className, children }) => (
  <footer className={classNames('footer', className)}>{children}</footer>
);

export default Footer;

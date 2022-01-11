import classNames from 'classnames';
import React from 'react';
import "./Header.scss";

const Header = ({ className, children }) => (
  <header className={classNames('header', className)}>{children}</header>
);

export default Header;

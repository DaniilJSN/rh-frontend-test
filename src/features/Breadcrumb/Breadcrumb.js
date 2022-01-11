import React from 'react';
import { v4 as uuid } from 'uuid';
import './Breadcrumb.scss';

const BreadCrumb = () => {

  // mock pages - can be parsed from url or any other method
  const pages = [
    {
      id: uuid(),
      href: '/#',
      name: 'Select date & time'
    },
    {
      id: uuid(),
      href: '/#',
      name: 'Payment'
    }
  ]

  return (
    <nav className="breadcrumb-wrapper transparent">
      {pages.map(({ id, name, href }) => (
        <a key={id} href={href} className="breadcrumb">
          {name}
        </a>
      ))}
    </nav>
  );
};

export default BreadCrumb;

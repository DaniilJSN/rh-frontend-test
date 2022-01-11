import React from 'react';
import classNames from 'classnames';
import "./Heading.scss";

const Heading = ({
  tag = 'h1',
  showAs = 'heading-1',
  className = null,
  children,
  ...props
}) => {
  const Component = tag;
  return (
    <Component className={classNames('heading', showAs, className)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;

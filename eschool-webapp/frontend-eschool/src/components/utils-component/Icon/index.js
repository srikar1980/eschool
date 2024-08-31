import React from 'react';

const Icon = ({ type, className }) => {
  return (
    <>
      {React.createElement(type, { className })}
    </>
  );
};

export default Icon;

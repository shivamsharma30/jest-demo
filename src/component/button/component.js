import React from 'react';
import './style.css';

const Button = ({ onclick, label }) => {
  return (
    <>
      <button id="btn" onClick={onclick}>
        {label}
      </button>
    </>
  );
};

export default Button;

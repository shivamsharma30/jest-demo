import React, { useState, useRef } from 'react';
import Button from './component/button/component';
import './App.css';

function App() {
  const num1Ref = useRef(0);
  const num2Ref = useRef();
  const [sum, setSum] = useState(0);
  const buttonText = 'Add';
  let abc;
  const hendler = () => {
    const num1 = parseInt(num1Ref.current.value);
    const num2 = parseInt(num2Ref.current.value);
    setSum(num1 + num2);
  };

  return (
    <div className="App">
      <input type="number" ref={num1Ref} />
      <input type="number" ref={num2Ref} />
      <Button onclick={hendler} label={buttonText} />
      <h3>Sum is: {sum}</h3>
    </div>
  );
}

export default App;

import React, { useEffect, useState, useRef } from "react";
import './simpleComponent.css';

function SimpleReactComponent({ text }) {

  // console.log("SimpleReactComponent rendered (eseguita ad ogni render/ogni aggiornamento di ogni stato del componente): ", text);


  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const outputRef = useRef(null);

  useEffect(() => {
    console.log("useEffect count: ", count);
    outputRef.current.innerText = count;
  }, [count]); // solo quando count cambia

  useEffect(() => {
    console.log("useEffect count2: ", count2);
    outputRef.current.innerText = count2;
  }, [count2]); // solo quando count2 cambia

  useEffect(() => {
    console.log("useEffect count3: ", count3);
    outputRef.current.innerText = count3;
  }, [count3]); // solo quando count3 cambia

  useEffect(() => {
    console.log("useEffect all: ", {count, count2, count3});
  }, [count, count2, count3]); // solo quando count3 cambia


  return(
    <div className="simple-component">
      <div>
        <h2>Testo: {text} (React component)</h2>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <h3>Count3: {count3}</h3>


        <div>Last Count: <span ref={outputRef}></span></div>
        <span>
          <button onClick={() => setCount(count +1)}>Increment</button>
          <button onClick={() => setCount2(count2 +1)}>Increment 2</button>
          <button onClick={() => setCount3(count3 +1)}>Increment 3</button>
        </span>
      </div>
    </div>
  );
}

export default SimpleReactComponent;
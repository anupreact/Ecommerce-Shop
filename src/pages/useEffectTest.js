import React, { useState } from "react";
import UseUseEffect from "../components/Testing/Hooks/useUseEffect";

const UseEffectTest = () => {
  const UseSomeEffect = UseUseEffect();

  const [first, setfirst] = useState(1);
  const [sec, setSec] = useState(1);

  const [depend, setDepend] = useState('');
  
  
  UseSomeEffect(depend);


  return (
    <div>
      <button
        onClick={() => {
          setfirst(first - 1);
          setDepend(`${first} + first`);
        }}
      >
        {" "}
        Minus
      </button>{" "}
      {first}{" "}
      <button
        onClick={() => {
          setfirst(first + 1);
          setDepend(`${first} + first`);
        }}
      >
        {" "}
        Plus
      </button>{" "}
      <br />
      <button
        onClick={() => {
          setSec(sec - 1);
          setDepend(`${sec} + second`);
        }}
      >
        {" "}
        Minus
      </button>{" "}
      {sec}{" "}
      <button
        onClick={() => {
            setSec(sec + 1);
          setDepend(`${sec} + second`);
        }}
      >
        {" "}
        Plus
      </button>
    </div>
  );
};

export default UseEffectTest;

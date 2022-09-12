import React, { useState } from "react";
import { createContext } from "react";
// import Header from "../../components/Header";
import Child1 from "./Child1";

export const MyContext = createContext();
const Context = () => {
  const [state, setState] = useState({
    name: "Anup",
    value: 1
  });
  const handleClick = (x)=>{
    setState({
        name:"Anup",
        value:state.value+x
    })
  }

  const ContextData = {state , handleClick}
  return (
    <div>
        {state.value}
        <MyContext.Provider value={ContextData}>
          <Child1 />
        </MyContext.Provider>
    </div>
  );
};

export default Context;

import React , { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Events from "./Events";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);


  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary])

  
   const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]) 
 

  return (
    <div style={{textAlign:"center"}}>
    <h1 style={{textAlign:"center"}}>useCallback()</h1>
    <p style={{color:"red"}}> As we can see for the 1st time when our page loads , all the components getting re-rendered but when we click the increment age button or increment salary button only their respective component and its button gets re-rendered </p>
    <p style={{color:"blue"}}>This is happening because we are using useCallback hook and providing a dependency array , the function to which we have provided the useCallback hook , it will only re-render when the values which are present in the useCallback dependency array</p>
      <Title />
      <Count text={"Age"} count={age} />
      <Button handleClick={incrementAge} >Increment Age</Button>
      <Count text={"Salary"} count={salary} />
      <Button handleClick={incrementSalary} >Increment Salary</Button>
      <hr />
      <Events/>
    </div>
  );
};

export default ParentComponent;

import React, { useCallback, useMemo, useState } from "react";
import ParentComponent from "../components/Testing/useCallback/ParentComponent";

const UseCallbackTest = () => {
  
  // USEMEMO
  function squareNum(number) {
    let a = 232- 222
    
    console.log("Squaring will be done! USEMEMO" , a);
    return Math.pow(number, 2);
  }

  const [number, setNumber] = useState(0);

  const [counter, setCounter] = useState(0);
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);
  
  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    console.log("counter USEMEMO");
    setCounter(counter + 1);
  };
  // USEMEMO


  // useCallback
  const funccount = new Set();

  const [count, setCount] = useState(0)
  const [number2, setNumber2] = useState(0)

  // const incrementCounter = ()=>{
  //   setCount(count + 1)
  // }
  const incrementCounter =useCallback(
    () => {
      console.log("Increment counter called")
      setCount(count + 1);
    },
    [count],
  )
  // const decrementCounter = ()=>{
  //   setCount(count - 1)
  // }
  const decrementCounter = useCallback(
    () => {
      console.log("Decrement counter called")
      setCount(count - 1);
    },
    [count],
  )
  //  const incrementNumber = ()=>{
  //   setCount(number2 + 1)
  //  }
   const incrementNumber = useCallback(
    () => {
      setNumber2(number2 + 1)
      console.log("Increment number called")
    },
    [number2],
  )
   
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
console.log(funccount.size);
  // useCallback
  



  return (
    <>
      <div
        style={{
          border: "1px solid red",
          height: "20rem",
          display: "flex",
          padding: ".3rem",
          justifyContent: "space-around",
        }}
      >
        <div style={{ border: "1px solid red", width: "45%", height: "16rem" }}>
          <h1>USECALLBACK</h1>

          Count: {count}
      <button onClick={incrementCounter}>
        Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
        increase number
      </button>
        </div>
        <div style={{ border: "1px solid red", width: "45%", }}>

          
          {/* USE MEMO FUNCTION */}
          <h1>USMEMO</h1>

          <input
            type="number"
            placeholder="Enter a number"
            value={number}
            onChange={onChangeHandler}
          ></input>
          

          <div>OUTPUT: {squaredNum}</div>
          <button onClick={counterHander}>Counter ++</button>
          <div>Counter : {counter}</div>
          {/* normal FUNCTIOM */}
        </div>
      </div>

      <ParentComponent />
    </>
  );
};

export default UseCallbackTest;

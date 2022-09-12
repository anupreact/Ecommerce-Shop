import React, { useState, useEffect, useRef } from "react";
import {useCustomTimeHooks, useFetch, useParameterHook} from "../components/Testing/useFetch";
import TestForm from "./Test/TestForm";

import SimpleImageSlider from "react-simple-image-slider";
// import Carousel from "react-slider-responsive";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import Rohit from "../components/Testing/HOC/Rohit";
import Virat from "../components/Testing/HOC/Virat";
import ParentComponent from "../components/Testing/useCallback/ParentComponent";

// USECAKKBACK

  
// USECAKKBACK


const Test = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [data2] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [data3]= useFetch("http://localhost:8000/getproducts")

  // const [time] = useCustomTimeHooks();

  const [username , designation] = useParameterHook("Anup" , "React Js developer")

  const [state2 , setState2 ] = useState({
    dmessage:false,
    umessage:false,
    text:true,
    notify:false,
  })

  const {dmessage , umessage ,text , notify} = state2;

  const handleUsername = () => { 
    setState2({
      umessage:true,
      text:true
    })
   }
   const handleDesignation = () => { 
    setState2({
      dmessage:true,
      umessage:false,
      text:true
    })
   }

  // useRef hook
  const countRef = useRef(0);
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  // console.log("I rendered!");

  const passwordRef = useRef();
  // const val = passwordRef.current

  //  useRef hook

  // controlled onChange
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = state;
  const handleChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  // console.log("name", name);
  // console.log("email", email);
  // console.log("passwordRef", passwordRef);

  const [dada, setDada] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(passwordRef.current.value);
    setDada(passwordRef.current.value);
  };


  const image1 = "https://images.unsplash.com/photo-1656996926124-3780e8bc6872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
  // controlled onChange

  // images array
  const images = [
    {
      url: "https://images.unsplash.com/photo-1656996926124-3780e8bc6872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1616609325352-69b4a9e29333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1655890938539-7257cdd5ea34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1656819429891-e609bdb35a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1605891035360-1d604890d553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1656356594129-2dae4ec88923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1656993084870-3a99d25739a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  // images array


  return (
    <div style={{ width: "80vw" }}>
     <br /><br /><br />

     <hr />
     <br /><br /><br />
     USECALLBACK

   
    
     USECALLBACK
     <br /><br /><br />
     



     HIGHER ORDER COMPONENT EXAMPLE
      <br /><br /><br /> <br /><br />

      <Rohit team={"Mumbai"}/>
      <Virat team={"Banglore"}/>
  
     
     
     <br /> <br /><br /><br />
    HIGHER ORDER COMPONENT EXAMPLE
     <hr />

     Passing Parameter to React Hooks
      <br /><br /><br /> <br /><br />
    
    {
      text ? <h1>This is a test heading</h1> : ""
    }
    <h1 onClick={()=>handleUsername()}> { username}</h1>
    {
      umessage ? "state of username changes" : " "
    }
    <h1 onClick={()=>handleDesignation()}> {designation} </h1>
    {
      dmessage ? "state of designation changes" : ""
    }
     
     <br /> <br /><br /><br />
     Passing Parameter to React Hooks 
     <hr />



     Using “useState” Hook in React Custom Hooks
     <br />
     {/* <h1>Current Time: {time}</h1> */}

      <br />
     Using “useState” Hook in React Custom Hooks



      {/* form  */}

      {/* <TestForm /> */}
      {/* form  */}

      <br />
      <hr />
      <br />
      <br />
      <br />

      <h1> React useRef Hook</h1>
      <button onClick={handle}>Click me</button>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={handleChange}
        />{" "}
        see whenever we are pressing a button , our component is re rendering ,
        controlled ----- {name}
        <br />
        <br />
        <input
          type="text"
          name="email"
          id=""
          value={email}
          onChange={handleChange}
        />{" "}
        see whenever we are pressing a button , our component is re rendering ,
        controlled ------{email}
        <br />
        <br />
        <input type="text" name="password" ref={passwordRef} /> no render
        ---useRef hook === {dada}
        <br />
        <button>Submit</button>
      </form>

      <br />
      <br />
      <br />
      <h1>React custom hook api 1</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
      <h1>React custom hook api 2</h1>

      {data2 &&
        data2.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
        <h1>React custom hook api 2</h1>
        {/* data 3 */}
        {data3 &&
        data3.map((post) => {
          return (

          <>
          <div>
          <p key={post.id}>{post.name}</p>
          {/* <img src={post.image} alt="" /> */}
          </div>
          </>
          )
          
        })}
    </div>
  );
};

export default Test;


// countdown using react-timer-hook package

// import React from "react";
// import { useTimer } from "react-timer-hook";

// function MyTimer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart
//   } = useTimer({
//     expiryTimestamp,
//     onExpire: () => console.warn("onExpire called")
//   });

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>react-timer-hook </h1>
//       <p>Timer Demo</p>
//       <div style={{ fontSize: "100px" }}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
//         <span>{seconds}</span>
//       </div>
//       <p>{isRunning ? "Running" : "Not running"}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button
//         onClick={() => {
//           // Restarts to 5 minutes timer
//           const time = new Date();
//           time.setSeconds(time.getSeconds() + 300);
//           restart(time);
//         }}
//       >
//         Restart
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
//   return (
//     <div>
//       <MyTimer expiryTimestamp={time} />
//     </div>
//   );
// }



// Interviewer : "Why Javascript is a Single Threaded Language ?"

// Me : "Because, Javascript can execute only one function at a time."
//      "that is why it is known as Single Threaded Language."

//  Interviewer : "And, Why Javascript can execute only one function at a time ?"

//  Me :  "Because, Javascript is a Single Threaded Language."
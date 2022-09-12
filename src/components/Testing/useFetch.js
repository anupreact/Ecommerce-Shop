import { useState, useEffect } from "react";
// React Custon Hook

// custom react hook which uses react built in useState and useEffect hook inside it
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

// custom react hook which uses react builtin useState hook inside it
export const useCustomTimeHooks=() =>{
  function getCurrentTime() {
    let date = new Date();
    return date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds();
  }
  let [time, setTime] = useState(getCurrentTime());
  
  setTimeout(() => {
    setTime(getCurrentTime());
  }, 1000);
  
  return [time];
}

// custom react hook with parameters
export const useParameterHook = (name , designation)=>{
  let userName = "Username: " + name;
  let userDesignation = "User Designation: " + designation;

  return[ userName , userDesignation]
}


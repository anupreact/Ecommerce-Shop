import React, { useEffect } from 'react'

const UseUseEffect = () => {

    const Message = (depend)=>{
        useEffect(()=>{
            console.log("run because", depend , " changed")
        },[depend])
        
    }
  return Message
}

export default UseUseEffect
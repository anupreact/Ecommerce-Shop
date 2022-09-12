import React,{useState} from 'react'
import { Button, message } from 'antd';
import { ToastContainer, toast } from "react-toastify";


export const useDeleteMessage = () => {
    const key = 'updatable';
    
    const openMessage = (message1,message2) => {
        message.loading({
          content: message1,
          key,
        });
        setTimeout(() => {
          message.success({
            content: message2,
            key,
            duration: 2,
          });
        }, 1000);
      };
  return openMessage
}




import React from 'react'
import {Modal } from 'antd';


export const useWarningModal = () => {

    const warning = (title , content) =>{
        Modal.error({
            title,
            content
          });
    }
  return warning
}

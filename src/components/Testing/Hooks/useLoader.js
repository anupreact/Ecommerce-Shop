import { Skeleton } from 'antd'
import React, { useState } from 'react'

export const useLoader = () => {
    
    const openLoader=() => { 
        return (
            <Skeleton
            active
            paragraph={{
              rows: 10,
            }}
          />
        )
     }
     return openLoader
 
}

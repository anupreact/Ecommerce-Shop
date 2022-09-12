import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useGetRequest = (url) => {
    const [data, setData] = useState(null)  

    useEffect(() => {
     axios.get(url).then((res)=>setData(res.data))
    }, [url])
    
  return [data]
}

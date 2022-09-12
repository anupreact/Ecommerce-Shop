import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
         <Result
          status="500"
          title="404"
          subTitle="Sorry, The page you are trying to access is under construction"
          extra={
            <Link to="/">
              <Button type="primary">Home</Button>
            </Link>
          }
        />
    </div>
  )
}

export default NotFound
import React from 'react'
import Login from '../component/login';

const login = (props) => {
  return (
    <div>
        <Login functionName={props.functionName} />
    </div>
  )
}

export default login

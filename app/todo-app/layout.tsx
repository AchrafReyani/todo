import React from 'react'
import SignInComponent from '../components/signin/signin';

const ToDoAppLayoutComponent = ({children} : {children: React.ReactElement}) => {
    const isAuthenticated = false;
  return isAuthenticated ? <div>{children}</div>
    :<SignInComponent/>
}

export default ToDoAppLayoutComponent
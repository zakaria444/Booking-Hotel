

import {Routes,Route,Navigate} from "react-router-dom"

import { isAuthenticated } from './Authenticated';

export const PrivateRoute = ({ children}) => {

  
        
    if (isAuthenticated () ) {
      return children
    }
      
    return <Navigate to="/login" />
  }


import {Routes,Route,Navigate} from "react-router-dom"

import { isAuthenticated } from './Authenticated';

export const OwnerRoute = ({ children}) => {

  
        
    if (isAuthenticated() && isAuthenticated().role === "owner-user" ) {
      return children
    }
      
    return <Navigate to="/" />
  }
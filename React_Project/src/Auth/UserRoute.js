import {Route } from "react-router-dom";
import React  from 'react'

import { isAuthenticated } from './Authenticated';

const UserRoute =({Component , ...rest}) => (
 <Route 
 {...rest}
 render={props =>
    isAuthenticated () && isAuthenticated().role === 'owner-user'  ? (
        <Component {...props}/>

    ):(
           window.location="/login"


    )
 }
/>
);

export default UserRoute;
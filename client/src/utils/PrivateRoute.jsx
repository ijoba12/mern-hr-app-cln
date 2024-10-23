import React from 'react'
import { useAuth } from '../context/AuthContext';
import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth()
    if(isLoading){
        return <div>Loading....</div>
    }
 
 return user ? children : <Navigate to="/auth/sign-in"/>
}

export default PrivateRoute
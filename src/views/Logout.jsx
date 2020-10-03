import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout () {

        console.log("Log Out")
        sessionStorage.removeItem('webData');
        
        sessionStorage.removeItem('userID'); 
        return (
            <Redirect to={{ pathname: '/login' }} />            
        );
    }
export default Logout;
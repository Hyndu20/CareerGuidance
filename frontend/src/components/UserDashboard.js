import React from 'react'
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
export default function UserDashboard( ) {
    
const HandleLogout = () => {
    localStorage.removeItem('token')
    return <Navigate to='/' />


    }
    return (
        
            <div>
            <h1>hello user</h1>
            <button onClick={HandleLogout} >Logout</button>
            </div>
        
    )
}
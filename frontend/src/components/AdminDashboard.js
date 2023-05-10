import React from 'react'
import { useState, useEffect } from "react";
import { Navigate , useLocation} from 'react-router-dom';
import Adminsidebar from './Adminslidebar';
import auth from "./auth/AdminLogin"


const AdminDashboard =( )=> {
return (
            <div>
                <Adminsidebar />
            </div>
           
    )
}


export default AdminDashboard;
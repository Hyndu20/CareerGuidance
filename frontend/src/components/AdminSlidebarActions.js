import React from "react";
import { useEffect, useState } from "react";
import Adminsidebar from "./Adminslidebar";
import { AllUsers } from "../actions";

const DisplayUsers = () => {
      const [users, setUsers] = useState([]);
      
        useEffect(() => {
          const FetchData = async () => {
            try {
              const response = await AllUsers();
              console.log(response)
              //console.log(response.data)
              setUsers(response);
            } catch (error) {
              console.log(error);
            }
          };
      
          FetchData();
        }, []);
      
        return (
          <div>
            <h2>Users</h2>
            {users.map(user => (
              <div key={user._id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Gender: {user.gender}</p>
                <p>Date of Birth: {user.dob}</p>
                <p>Mobile: {user.mobile}</p>
                <p>Qualification: {user.qualification}</p>
                <p>School/College: {user.school_clz}</p>
                <p>Specialization: {user.specialization}</p>
                <h1>hii display</h1>
              </div>
            ))}
          </div>
        );
      };
      
      const AdminSlidebarActions = () => {
        return (
          <div className="px-6 pt-6 2xl:container">
            <DisplayUsers />
          </div>
        );
      };
      
     
export default AdminSlidebarActions;
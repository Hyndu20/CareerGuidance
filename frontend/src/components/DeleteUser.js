import React from "react";
import { useEffect, useState } from "react";
import Adminsidebar from "./Adminslidebar";
import { AllUsers } from "../actions";
import { DeleteUser } from "../actions";

const DeleteUsers = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await AllUsers();
          setUsers(response);
          console.log(users)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleDelete =  async(userId) => {
      try {
        console.log(userId);
        const response = await DeleteUser(userId);
        console.log(response);
       setUsers(users.filter(user => user._id !== userId));
          
          
     } catch (error) {
       console.log(error);
     }
    };
  
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
    <h1>hii delete</h1>
   
    <button onClick={() => handleDelete(user._id)}>Delete</button>
  </div>
))}
      </div>
    );
  };
  
  export default DeleteUsers;
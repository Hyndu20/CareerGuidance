import React from "react";
import { useEffect, useState } from "react";
import Adminsidebar from "./Adminslidebar";
import { AllExperts } from "../actions";
import { DeleteExpert } from "../actions";

const DeleteExperts = () => {
    const [experts, setExperts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await AllExperts();
          setExperts(response);
          console.log(experts)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleDelete =  async(title,id) => {
      try {
        console.log(title);
        const response = await DeleteExpert(title);
        console.log(response);
       setExperts(experts.filter(experts => experts._id !== id));
          
          
     } catch (error) {
       console.log(error);
     }
    };
  
    return (
      <div>
        <h2>Experts</h2>
        {experts.map(experts => (
  <div key={experts._id}>
    <p>Title: {experts.title}</p>
    <p>Name: {experts.name}</p>
    <p>Designation: {experts.Designation}</p>
    <p>Descripton: {experts.Description}</p>
   
    <h1>hii delete</h1>
   
    <button onClick={() => handleDelete(experts.title,experts._id)}>Delete</button>
  </div>
))}
      </div>
    );
  };
  
  export default DeleteExperts;
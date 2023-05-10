import React from "react";
import { useEffect, useState } from "react";
import Adminsidebar from "./Adminslidebar";
import { DeleteSkill, AllSkills } from "../actions";

const DeleteSkills = () => {
    const [skills, setSkills] = useState([]);
  
    useEffect(() => {
      const FetchData = async () => {
        try {
          const response = await AllSkills();
          setSkills(response.data);
          console.log(skills)
        } catch (error) {
          console.log(error);
        }
      };
  
      FetchData();
    }, []);
  
    const handleDelete =  async(name) => {
      try {
        console.log(name);
        const response = await DeleteSkill(name);
        console.log(response);
       setSkills(skills.filter(skills => skills.name !== name));
          
          
     } catch (error) {
       console.log(error);
     }
    };
  
    return (
      <div>
       <h2>Skills</h2>
      {skills.map(skill => (
        <div key={skill._id}>
          <p>Name: {skill.name}</p>
          {skill.skills.map(skillDetail => (
            <div key={skillDetail._id}>
              <p>Skill: {skillDetail.name}</p>
            </div>
          ))}
    <h1>hii delete</h1>
   
    <button onClick={() => handleDelete(skill.name)}>Delete</button>
  </div>
))}
      </div>
    );
  };
  
  export default DeleteSkills;
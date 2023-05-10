import React from "react";
import { useEffect, useState } from "react";
import Adminsidebar from "./Adminslidebar";
import { AllSkills } from "../actions";
import { DeleteUser } from "../actions";

const DisplaySkills = () => {
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
        </div>
      ))}
     
    </div>
    );
  };
  
  export default DisplaySkills;
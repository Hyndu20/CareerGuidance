import React, { useState } from "react";
import { AddSkill } from "../actions";
import { ToastContainer, toast } from "react-toastify";

const AddSkills = () => {
  const [skillName, setSkillName] = useState("");
  const [subSkills, setSubSkills] = useState([""]);

  const notify = (message) => {
    toast(message);
  };

  const handleSubSkillChange = ( index,event) => {
    const newSubSkills = [...subSkills];
    newSubSkills[index] = event.target.value;
    setSubSkills(newSubSkills);
    console.log(subSkills);
  };

  const handleAddSubSkill = () => {
    setSubSkills([...subSkills, ""]);
    console.log(subSkills)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const subSkillObjects = subSkills.map(skillName => ({ name: skillName }));
    const newSkill = {
      name: skillName,
      skills: subSkillObjects,
    };
    
    try {
      const response = await AddSkill(newSkill);
      console.log(response);
      if (response.data.message === "skills added successfully") {
        notify("Skills added");
      }
    } catch (error) {
      console.log(error);
      notify("Something went wrong");
    }
    
    setSkillName('');
    setSubSkills([""]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Skill Name:
          <input
            type="text"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </label>
        <br />
        {subSkills.map((subSkill, index) => (
          <div key={index}>
            <label>
              Sub-Skill #{index + 1}:
              <input
                type="text"
                value={subSkill}
                onChange={(event) => handleSubSkillChange(index,event)}
              />
            </label>
            {index === subSkills.length - 1 && (
              <button type="button" onClick={() => handleAddSubSkill()}>
                Add Sub-Skill
              </button>
            )}
          </div>
        ))}
        <br />
        <button type="submit">Add Skill</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddSkills;
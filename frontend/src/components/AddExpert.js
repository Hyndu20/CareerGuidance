import React, { useState } from "react";
import { AddExpert } from "../actions";
import { ToastContainer, toast } from "react-toastify";

const AddExperts = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");

  const notify = (message) => {
    toast(message);
  };


  const handleSubmit = async (event) => {
    console.log("submitted");
    event.preventDefault();
    const formData = {
      title: title,
      name: name,
      designation: designation,
      description: description
    };
    console.log(formData);
    
    try {
       const response = await AddExpert(formData);
      console.log(response);
      if (response.data._id) {
        notify("Expert Details added");
      }
    } catch (error) {
      console.log(error);
      notify("Something went wrong");
    }
    
    setName('');
    setTitle('');
    setDescription('');
    setDesignation('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
         </label>
      <br />
      <label>
        Designation:
        <input
          type="text"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
      <ToastContainer />
    </div>
  );
};


export default AddExperts;
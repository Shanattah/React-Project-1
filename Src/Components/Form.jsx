import React, { useState } from "react";

const Form = ({ setSearchQuery }) => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Input title you want to search for"
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;

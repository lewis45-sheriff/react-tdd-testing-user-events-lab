import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interests: checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Hi, I'm _______</h1>
      <img src="https://via.placeholder.com/350" alt="My profile pic" />
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      <a href="https://github.com/yourusername">GitHub</a>
      <a href="https://linkedin.com/in/yourusername">LinkedIn</a>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="interests"
            value="React"
            checked={formData.interests.includes("React")}
            onChange={handleChange}
          />
          React
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="JavaScript"
            checked={formData.interests.includes("JavaScript")}
            onChange={handleChange}
          />
          JavaScript
        </label>
        <label>
          <input
            type="checkbox"
            name="interests"
            value="CSS"
            checked={formData.interests.includes("CSS")}
            onChange={handleChange}
          />
          CSS
        </label>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>Thank you, {formData.name}, for subscribing!</p>
          {formData.interests.length > 0 && (
            <p>Your interests: {formData.interests.join(", ")}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

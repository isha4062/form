import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const UserDetails = ({ formData, setFormData }) => {
  const [page, setPage] = useState(false);
  const validateData = (user, pass, country) => {
    var validated = true;
    if (user === "" || pass === "" || country === "") {
      validated = false
      alert("Please fill in the complete details!");
    }
    return validated;
  }
  if (page) {
    return <Navigate to="/personal" />
  }
  return (
    <div className="form">
      <div className="info">
        <div className="header">
          <h1>Register</h1>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(event) => setFormData({ ...formData, username: event.target.value })} />
          <input
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
          <select
            type="text"
            placeholder="Country"
            // value={formData.country}
            onChange={(event) => setFormData({ ...formData, country: event.target.value })}>
              <option value="">Select your country</option>
              <option value="Aghanistan">Afghanistan</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="India">India</option>
              <option value="Sydney">Sydney</option>
          </select>
        </div>
        <div className="footer">
          <button disabled>
            Prev
          </button>
          <button
            onClick={() => {
              var conty = validateData(formData.username, formData.password, formData.country);
              if (conty) {
                console.log(formData);
                setPage(true);
              }
            }}
          >
            Next
          </button>
        </div></div>
    </div>
  )
}

export default UserDetails

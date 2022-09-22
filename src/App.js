import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PersonalDetails from './components/PersonalDetails';
import Success from './components/Success';
import "./style/main.scss";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    firstName: "",
    lastName: "",
    username: "",
    address: "",
    number: "",
    birthDate: ""
  });
  return (
    <Routes>
      <Route exact path="/" element={<Home formData={formData} setFormData={setFormData} />} />
      <Route path="/personal" element={<PersonalDetails formData={formData} setFormData={setFormData} />} />
      <Route path="/success" element={<Success formData={formData} />} />
    </Routes>
  );
}

export default App;

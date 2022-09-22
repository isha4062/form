import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const PersonalDetails = ({ formData, setFormData }) => {
    const [page, setPage] = useState(false);
    const validateData = (first, last, email, num, date, address) => {
        var validated = true;
        if (first === "" || last === "" || email === "" || num === "" || date === "" || address === "") {
            validated = false;
            alert("Please fill in the complete details!");
        }
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            validated = false;
            alert("Please provide correct email address!");
        }
        else if (num.length !== 10) {
            validated = false;
            alert("Please provide correct number!");
        }
        return validated;
    }
    if (page) {
        return <Navigate to="/success" />
    }
    const handlePrev = () => {
        return <Navigate to="/" />
    }
    return (
        <div className="form">
            <div className="info">
                <div className="header">
                    <h1>Personal Details</h1>
                </div>
                <div className="container">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                        }} />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value });
                        }} />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                        }} />
                    <input
                        type="number"
                        placeholder="Phone number"
                        value={formData.number}
                        onChange={(e) => {
                            setFormData({ ...formData, number: e.target.value });
                        }} />
                    <input
                        type="date"
                        placeholder=""
                        min="1995-04-01"
                        max="2010-04-01"
                        value={formData.birthDate}
                        onChange={(e) => {
                            setFormData({ ...formData, birthDate: e.target.value });
                        }} />
                    <input
                        type="text"
                        placeholder="Address"
                        value={formData.address}
                        onChange={(e) => {
                            setFormData({ ...formData, address: e.target.value });
                        }} />
                </div>
                <div className="footer">
                    <button onClick={() => handlePrev()}>
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            var conty = validateData(formData.firstName, formData.lastName, formData.email, formData.number, formData.birthDate, formData.address);
                            if (conty) {
                                console.log(formData);
                                setPage(true);
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails;

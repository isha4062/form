import React from 'react'

const Success = ({ formData }) => {
    console.log(formData);
    return (
        <div className="form">
            <div className="info">
                <div className='success'>
                    <h1>The data has been successfully submitted!</h1>
                    <h4>Details</h4>
                    <div className="data">
                        <h6>First name : {formData.firstName}</h6>
                        <h6>Last name : {formData.lastName}</h6>
                        <h6>User name : {formData.username}</h6>
                        <h6>Password : {formData.password}</h6>
                        <h6>Birth Date : {formData.birthDate}</h6>
                        <h6>Country : {formData.country}</h6>
                        <h6>Email : {formData.email}</h6>
                        <h6>Phone Number : {formData.number}</h6>
                        <h6>Address : {formData.address}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success

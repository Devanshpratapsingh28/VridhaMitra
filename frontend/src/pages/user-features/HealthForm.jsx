import React, { useState } from 'react';
import './healthform.css';

const HealthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age:'',
    email: '',
    mobile: '',
    emergency_contact:'',
    medical_history:'',
    blood_group:'',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://vridhamitra.onrender.com/user-health/', formData, {
          withCredentials: false,   
      });
      console.log("Data Uploaded Successfully", response.data.message);
      // navigate("/login")

  } catch (e) {
      console.log("Data could not be uploaded", e);
      toast.error(e.response.data.message)
  }
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Patient registration successful!');
    setFormData({
        name: '',
        age:'',
        email: '',
        mobile: '',
        emergency_contact:'',
        medical_history:'',
        blood_group:'',
        address: ''
      });
  };

  return (
    <div className="health-form-container">
      <div className="health-form-card">
        <h1 className="form-title">Tell Us About You</h1>
        <p className="form-description">Get Started With Us.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age </label>
            <input
              type="number"
              id="age"
                name="age"
              placeholder="Please enter your age..."
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Please enter your mobile no..."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergency">Emergency Contact </label>
            <input
              type="tel"
              id="emergency_contact"
              name="emergency_contact"
              placeholder="Please enter your emergency contact no..."
              value={formData.emergency_contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="medhistory">Medical History</label>
            <input
              type="text"
              id="medical_history"
              name="medical_history"
              placeholder="Please enter your mediacl history..."
              value={formData.medical_history}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bloodgroup">Blood Group</label>
            <select
              type="text"
              id="blood_group"
              name="blood_group"
            //   placeholder="Please enter your blood group..."
              value={formData.blood_group}
              onChange={handleChange}
              required
            >
                <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Please enter your address..."
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <button onSubmit={handleSubmit} type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;
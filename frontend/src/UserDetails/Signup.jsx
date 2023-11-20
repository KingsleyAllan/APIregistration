import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/register', formData);
      console.log('User registered:', response.data);
      toast.success('User registered successfully!', { position: toast.POSITION.TOP_RIGHT });
      window.location.href = "/";
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Error registering user. Please try again.', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Add this line to render toast messages */}
      <Link to="/">
        <h1 style={{ textAlign: 'center' }}>REGISTER USER INTERFACE</h1>
      </Link>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button style={{ backgroundColor: '#333' }} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
// 
export default Signup;

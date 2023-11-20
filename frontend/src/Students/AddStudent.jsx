import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./AddStudent.css"; // Import the external CSS file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStudent() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/student",
        formData
      );
      console.log("Student added:", response.data);
      toast.success("Student added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Clear form fields after successful submission
      setFormData({ firstname: "", lastname: "", gender: "" });
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("Error adding student. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="container">
      <Link to="/">
        <h1>REGISTER USER INTERFACE</h1>
      </Link>
      <h2 className="header">Create Student</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="formGender" controlId="formGender">
          <Form.Label className="d-block">Gender:</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="select" // Apply the 'select' class here
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Student
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default AddStudent;

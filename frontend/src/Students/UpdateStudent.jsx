import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./AddStudent.css"; // Import the external CSS file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateStudent() {
  const { id } = useParams(); // Get the ID parameter from the URL
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });

  useEffect(() => {
    // Fetch student data for the specified ID when component mounts
    if (id) {
      fetchStudentData();
    }
  }, [id]);

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/student/${id}`);
      const { firstname, lastname, gender } = response.data;
      setFormData({ firstname, lastname, gender });
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        `http://localhost:4000/updateStudent/${id}`, // Use the appropriate endpoint for updating the student
        formData
      );
      console.log("Student updated:", response.data);
      toast.success("Student updated successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error updating student:", error);
      toast.error("Error updating student. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  

  return (
    <div className="container">
      <Link to="/">
        <h1>REGISTER USER INTERFACE</h1>
      </Link>
      <h2 className="header">Update Student</h2>
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
          Update Student
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default UpdateStudent;

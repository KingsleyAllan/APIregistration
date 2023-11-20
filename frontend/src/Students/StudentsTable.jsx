import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentsTable.css";

function StudentsTable() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchGender, setSearchGender] = useState("");

  useEffect(() => {
    // Fetch data from the provided endpoint
    fetch("http://localhost:4000/student")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterByName = (name) => {
    setSearchName(name);
    const filtered = students.filter(
      (student) =>
        student.firstname.toLowerCase().includes(name.toLowerCase()) ||
        student.lastname.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const filterByGender = (gender) => {
    setSearchGender(gender);
    if (gender === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) => student.gender.toLowerCase() === gender.toLowerCase()
      );
      setFilteredStudents(filtered);
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update student with ID: ${id}`);
    // Add the logic to navigate to the update page or perform the update operation
  };

  const handleDelete = async (id) => {
    // add delete logic here:
  };

  return (
    <div className="container">
      <Link to={"/"}>
        <h1>REGISTER USER INTERFACE</h1>
      </Link>
      <Form className="filter-form1">
        <Form className="filter-form">
          <Form.Group controlId="formSearchName">
            <Form.Label>Search by Name:</Form.Label>
            <Form.Control
              type="text"
              value={searchName}
              onChange={(e) => filterByName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSearchGender">
            <Form.Label>Filter by Gender:</Form.Label>
            <Form.Control
              as="select"
              value={searchGender}
              onChange={(e) => filterByGender(e.target.value)}
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Form>
      <Table striped bordered hover className="students-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.gender}</td>
              <td>
                <Link to={`/updatestudent/${student.id}`}>
                  <Button variant="info">Update Student</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
}

export default StudentsTable;

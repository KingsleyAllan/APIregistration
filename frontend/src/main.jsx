import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";  
import Signup from "./UserDetails/Signup.jsx";
import Login from "./UserDetails/Login.jsx";
import Notfound from "./UserDetails/Notfound.jsx";
import StudentsTable from "./Students/StudentsTable.jsx";
import AddStudent from "./Students/AddStudent.jsx";
import UpdateStudent from "./Students/UpdateStudent.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/addstudents" element={<AddStudent />} /> 
        <Route exact path="/studentstable" element={<StudentsTable/>} /> 
        <Route path="/updatestudent/:id" element={<UpdateStudent />} />
        <Route exact path="*" element={<Notfound />} />
       
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRoutes />);

import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import Navbar from "./components/Navbar.jsx";
import ReportItemForm from "./pages/Report_Item.jsx"
import Dashboard from "./pages/Dashboard.jsx"

function App() {
  return (
    <>
      <Navbar/>
       <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/login" element = {<Login/>}></Route>
          <Route path="/signup" element = {<SignUp/>}></Route>
          <Route path='/report-item' element = {<ReportItemForm/>}></Route>
          <Route path='/dashboard' element = {<Dashboard/>}></Route>
       </Routes>
    </>
      
    
  );
}

export default App;


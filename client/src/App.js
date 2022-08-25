import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { getAbout, getFaculty }from './actions/actionsFaculty';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Faculty from './pages/Faculty/Profile';
import Manage from './pages/Faculty/Manage';
import ManageA from './pages/Admin/Manage';
import MyAccount from './pages/Faculty/MyAccount';
import ForgotPass from './pages/ForgotPass'
import AdminDashboard from "./pages/Admin/AdminDashboard";
import HandleAccounts from "./pages/Admin/HandleAccounts";
import HandleRequest from "./pages/Admin/HandleRequest";
import UserProfile from "./pages/Admin/UserProfile";
import Header from "./components/Faculty/Header";
import Report from "./components/report";
import ReportAdmin from "./components/reportAdmin";

import "./report.css";
import About from "./pages/Faculty/About";
import AboutManage from "./pages/Admin/AboutManage";
const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile')); 
 
 

   


  return (
    
    <div  className="app-main">
      
      
          
          <Router>
          
              <Routes >
                <Route exact path="/" element={<SignIn />}/>
                <Route exact path="/signup" element={<SignUp />}/>
                <Route exact path="/forgotpass" element={<ForgotPass />}/>           
                <Route exact path="/home" element={ <Faculty /> }/>
                      
                <Route exact path="/profile" element={<Faculty />}/>
                <Route exact path="/manage" element={<Manage />}/>
                <Route exact path="/manageA/:id" element={<ManageA />}/>
                <Route exact path="/account" element={<MyAccount />}/>
                <Route exact path="/about" element={<AboutManage />}/>

                <Route exact path="/dashboard" element={<AdminDashboard />}/>
                <Route exact path="/handleaccounts" element={<HandleAccounts />}/>
                <Route exact path="/handlerequest" element={<HandleRequest />}/>
                <Route exact path="/aboutmanage" element={<AboutManage />}/>
                <Route exact path="/userprofile/:id" element={<UserProfile />}/>

                <Route exact path="/report/:id" element={<Report />}/>
                <Route exact path="/reportAdmin/:id" element={<ReportAdmin />}/>



                <Route exact path="/" element={ () => (!user ? <SignIn/>  : <Navigate replace to="/home"/> )} />
              </Routes>
            </Router>
  </div>
  );
 
  };

export default App;

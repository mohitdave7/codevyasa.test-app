import React from 'react';
import {  Route,Routes } from "react-router-dom";
import {PrivateRoute} from './privateRoute';
import UserProfile from './Components/profile';
import About from './Components/about';
import NormalLoginForm from './Components/login';
function AllRoutes() {
  const isLoggedIn = localStorage.getItem('Authentication') as string // check cookie or local storage etc.

    return (
          <Routes>
              <Route path="/" element={<About />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/login" element={<NormalLoginForm />}/>
              <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>}/>
          </Routes>
    );
  }

  export default AllRoutes;

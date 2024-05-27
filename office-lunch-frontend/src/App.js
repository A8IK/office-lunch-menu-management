import React from 'react';
import { BrowserRouter as Router, Route, Routes,BrowserRouter, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Employee from './components/Employee';

const App = () => {
  return (
      <div className = "App">
        <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<Login />}/>
          <Route path = "/admin" element = {<Admin/>}/>
          <Route path = "/employee" element = {<Employee/>}/>
          <Route path = "*" element = {<Navigate to = "/login"/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

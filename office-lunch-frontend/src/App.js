import React from 'react';
import { BrowserRouter as Router, Route, Routes,BrowserRouter} from 'react-router-dom';
import Admin from './components/Admin';

const App = () => {
  return (
      <div className = "App">
        <BrowserRouter>
        <Routes>
          <Route path = "/admin" element ={<Admin/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

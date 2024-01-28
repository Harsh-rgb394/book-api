import { useState } from 'react';
import './App.css';
import Homepage from "./Pages/Homepage"
import Regsiter from "./Pages/Regsiter"
import Login from './Pages/login';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ProtectedRoute from './Compoenets/ProtectedRoute';
import PublicRoute from './Compoenets/PublicRoute';
function App() {
  // const [bankinfo,setbankinfo]=useState([]);

  // const roledata=bankinfo.role;

  return (
      <Routes>
        <Route path='/' element={        <ProtectedRoute>
<Homepage/>
</ProtectedRoute>
}/>


        <Route path='/regsiter' element={
                <PublicRoute>
                <Regsiter/>
                </PublicRoute>
}/>


        <Route path='/login' element={
                <PublicRoute>
                <Login/> 
                </PublicRoute>
} 
                />


      </Routes>
  );
}

export default App;

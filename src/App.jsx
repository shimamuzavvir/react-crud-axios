import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import UserDetails from './UserDetails';
import Edit from './Edit';
import Create from './Create';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavBar/>
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/userDetails' element={<UserDetails/>}/>
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/create' element={<Create />} />
          </Routes>
          </BrowserRouter>
      
    </div>
  );
};

export default App;
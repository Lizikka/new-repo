import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUser from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import EditUser from './pages/EditUser';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/:userId"} element={<EditUser />} />
            <Route path={"/create"} element={<CreateUser />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

 

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import ProjectDetails from './pages/ProjectDetails';

const RoutingApp = () => {
    return ( 
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category-list' element={<CategoryList />} />
            <Route path='/project-details' element={<ProjectDetails />} />   
        </Routes>
    </BrowserRouter> );
}
 
export default RoutingApp;
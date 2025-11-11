import React from 'react';
import { BrowerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import ProjectDetails from './pages/ProjectDetails';

const RoutingApp = () => {
    return ( 
    
    <BrowerRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category-list' element={<CategoryList />} />
            <Route path='/project-details' element={<ProjectDetails />} />   
        </Routes>
    </BrowerRouter> );
}
 
export default RoutingApp;
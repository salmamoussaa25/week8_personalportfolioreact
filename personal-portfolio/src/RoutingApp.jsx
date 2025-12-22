import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './pages/UXProjectList';
import About from './pages/About';
// import ProjectDetails from './pages/ProjectDetails';

const RoutingApp = () => {
    return ( 
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ux-project-list' element={<CategoryList />} />
            <Route path='/about' element={<About />} />
            
            {/* <Route path='/project-details' element={<ProjectDetails />} />    */}
        </Routes>
    </BrowserRouter> );
}
 
export default RoutingApp;
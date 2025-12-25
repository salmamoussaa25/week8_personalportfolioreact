import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UXProjectList from './pages/UXProjectList';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import UXProjectOne from './pages/UXProjectOne';

const RoutingApp = () => {
    return ( 
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ux-project-list' element={<UXProjectList />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/categories' element={<Categories />} />ss
            <Route path='/ux-project1-details' element={<UXProjectOne />} />   
        </Routes>
    </BrowserRouter> );
}
 
export default RoutingApp;
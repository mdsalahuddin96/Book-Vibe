import React from 'react';
import Navbar from '../components/shared/Navbar';
import Home from '../pages/homepages/Home';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
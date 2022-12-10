import React from 'react';
import Orders from './Components/Orders/Orders';
import ProductBar from './Components/Products/ProductBar';
import Products from './Components/Products/Products';
import Sidebar from './Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <Sidebar></Sidebar>
            </div>
            <div className='flex-auto'>
                <ProductBar></ProductBar>
                <Products></Products>
            </div>

        </div>
    );
};

export default Dashboard;
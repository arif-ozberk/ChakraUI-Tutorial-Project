import React from 'react';
import { Outlet } from 'react-router';

// Styles


const RootLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
}
 
export default RootLayout;
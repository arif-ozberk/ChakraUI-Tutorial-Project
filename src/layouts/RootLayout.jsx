import React from 'react';
import { Outlet } from 'react-router';

// Styles


const RootLayout = () => {
    return (
        <div>
            Root Layout
            <Outlet />
        </div>
    );
}
 
export default RootLayout;
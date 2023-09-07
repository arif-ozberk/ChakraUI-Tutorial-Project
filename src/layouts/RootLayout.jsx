import React from 'react';
import { Outlet } from 'react-router';
import { Grid, GridItem } from '@chakra-ui/react';

// Styles

// Components
import Navbar from '../components/Navbar';


const RootLayout = () => {
    return (
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
            <GridItem 
                as="aside" 
                colSpan="1" 
                minHeight="100vh" 
                bg="purple.400"
            >
                <span>Sidebar</span>
            </GridItem>

            <GridItem 
                as="main" 
                colSpan="5"
                p="40px"
            >
                <Navbar />
                <Outlet />
            </GridItem>
        </Grid>
    );
}
 
export default RootLayout;
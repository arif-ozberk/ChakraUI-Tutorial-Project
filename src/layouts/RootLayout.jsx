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
                colSpan={{ base: 6, lg: 2, xl: 1 }} 
                minHeight={{ lg: "100vh" }} 
                bg="purple.400"
                p={{ base: "20px", lg: "30px" }}
            >
                <span>Sidebar</span>
            </GridItem>

            <GridItem 
                as="main" 
                colSpan={{ base: 6, lg: 4, xl: 5 }}
                p="40px"
            >
                <Navbar />
                <Outlet />
            </GridItem>
        </Grid>
    );
}
 
export default RootLayout;
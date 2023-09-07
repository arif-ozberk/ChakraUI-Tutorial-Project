import React from 'react';

// Styles

// Chakra UI
import { Box, SimpleGrid, Text } from '@chakra-ui/react';


const Dashboard = () => {

    return (
        <SimpleGrid p="10px" spacing="10px" minChildWidth="250px" >
            <Box bg="white" h="200px" border="1px solid">
                <Text>Hello</Text>
            </Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

        </SimpleGrid>
    );
}
 
export default Dashboard;
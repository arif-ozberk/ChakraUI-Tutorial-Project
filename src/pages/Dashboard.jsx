import React from 'react';

// Styles

// Chakra UI
import { Heading, Text, Container, Box } from '@chakra-ui/react';


const Dashboard = () => {

    const boxStyles = {
        p: "10px",
        bg: "purple.400",
        color: "white",
        fontWeight: "600",
        borderRadius: "8px",
        textAlign: "center",
        filter: "blur(2px)",
        transition: "filter 0.3s ease, background 0.3s ease, color 0.3s ease",
        cursor: "pointer",
        
        ":hover": {
            filter: "none",
            color: "black",
            bg: "blue.200"
        }
    }


    return (
        <Container as="section" maxWidth="4xl" py="20px">
            <Heading my="30px" p="10px">Chakra UI Components</Heading>
            <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit.</Text>

            <Box my="30px" p="20px" bg="orange">
                <Text color="white">This is a box.</Text>
            </Box>

            <Box sx={boxStyles}>
                Hello World!
            </Box>
        </Container>
    );
}
 
export default Dashboard;
import React from 'react';
import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react';


const Navbar = () => {
    return (
        <Flex as="nav" p="10px" alignItems="center">
            <Heading as="h1">Task Manager</Heading>

            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">M</Box>
                <Text>arifozberk@gmail.com</Text>
                <Button colorScheme="purple">Logout</Button>
            </HStack>
        </Flex>
    );
}

export default Navbar;
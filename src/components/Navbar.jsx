import React from 'react';

// Chakra UI
import { Avatar, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from '@chakra-ui/react';
import { UnlockIcon } from '@chakra-ui/icons';


const Navbar = () => {

    const toast = useToast()
    

    const showToast = () => {
        toast({
            title: "Logged out...",
            description: "Successfully logged out.",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon />,
            variant: "top-accent"
        });
    }

    return (
        <Flex as="nav" p="10px" alignItems="center" mb="40px">
            <Heading as="h1">Task Manager</Heading>

            <Spacer />

            <HStack spacing="20px">
                <Avatar src='' />
                <Text>arifozberk@gmail.com</Text>
                <Button colorScheme="purple" onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
    );
}

export default Navbar;
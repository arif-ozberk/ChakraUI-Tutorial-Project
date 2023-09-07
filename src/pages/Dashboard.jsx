import React from 'react';

// Styles

// Chakra UI
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from '@chakra-ui/react';

// Data
import data from "../../data/db.json";
import { EditIcon, ViewIcon } from '@chakra-ui/icons';


const Dashboard = () => {

    return (
        <SimpleGrid p="10px" spacing={10} minChildWidth="300px" >
            {data.tasks.map((taskItem, index) => (
                <Card key={taskItem.id} borderTop="8px" borderColor="purple.400" bg="white">
                    <CardHeader>
                        <Flex>
                            <Box h="50px" w="50px">
                                <Text>AV</Text>
                            </Box>
                            <Box>
                                <Heading as="h3" size="sm">{taskItem.title}</Heading>
                                <Text>by {taskItem.author}</Text>
                            </Box>
                        </Flex>
                    </CardHeader>

                    <CardBody color="gray.500">
                        <Text>{taskItem.description}</Text>
                    </CardBody>

                    <Divider borderColor="gray.200" />

                    <CardFooter>
                        <HStack>
                            <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                            <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
                        </HStack>
                    </CardFooter>
                </Card>
            ))}

        </SimpleGrid>
    );
}
 
export default Dashboard;
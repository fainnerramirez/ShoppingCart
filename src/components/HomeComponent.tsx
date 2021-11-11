//Chakra UI
import { Container, Text, Box, Heading, Button, Flex, useColorModeValue } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'
//Types
import { propsHome } from "../const/Types";
//react-router-dom
import { Link } from "react-router-dom";

import * as COLOR from "../const/Colors";

const Home: React.FC<propsHome> =  ({ title, subtitle, description }: propsHome) => {

    const color = useColorModeValue(COLOR.dark, 'gray.50');
    const bgButton = useColorModeValue(COLOR.secondary, COLOR.primary);

    return(
        <Container maxW="70%" textAlign="center">
            <Flex mt={10} justifyContent="center" alignItems="center" flexDir="column">
                <Box maxW="full">
                    <Heading as="h1" mt={20} fontSize="6xl">
                        <Text
                            bgGradient={ COLOR.bgGradientText }
                            bgClip="text"
                            >
                            {title}
                        </Text>
                        <Text color={ COLOR.primary }>{ subtitle }</Text>   
                    </Heading>
                    <Text mt={10} fontSize="3xl" textAlign="center" color={color}>{ description }</Text>
                </Box>

                <Box mt={10}>
                    <Link to="products">
                        <Button as="a" bg={ bgButton } color="gray.50" cursor="pointer" >
                            Comprar
                            <ArrowForwardIcon ml={2} w={6} h={5} />
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Container>
    )
}

export default Home;
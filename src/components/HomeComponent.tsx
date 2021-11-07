import { Container, Text, Box, Heading, Button, Flex } from "@chakra-ui/react"

interface props {
    title: string,
    subtitle: string,
    description: string
}

const Home: React.FC<props> =  ({ title, subtitle, description }: props) => {

    return(
        <Container maxW="70%" textAlign="center">
            <Flex mt={20} justifyContent="center" alignItems="center" flexDir="column">
                <Box>
                    <Heading as="h1" mt={20} fontSize="6xl">
                        { title }
                        <Text color="yellow.500">{ subtitle }</Text>   
                    </Heading>
                    <Text mt={10} fontSize="3xl" textAlign="center" >{ description }</Text>
                </Box>

                <Box mt={10}>
                    <Button as="a" variant="outline" colorScheme="yellow">Shopping</Button>
                </Box>
            </Flex>

        </Container>
    )
}

export default Home;